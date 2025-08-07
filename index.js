const imaps = require('imap-simple');
const config = require('./config');
const moment = require('moment');
const chalk = require('chalk');

(async () => {
  try {
    const connection = await imaps.connect({ imap: config.imap });
    await connection.openBox('INBOX');

    const delayDays = 365; // Dias a considerar como "antigo"
    const searchDate = moment().subtract(delayDays, 'days').toDate();

    const searchCriteria = ['ALL', ['BEFORE', searchDate.toISOString()]];
    const fetchOptions = { bodies: ['HEADER'], struct: true };

    const messages = await connection.search(searchCriteria, fetchOptions);
    const deletions = messages.map(item => item.attributes.uid);

    console.log(chalk.blue(` Encontrados ${deletions.length} e-mails para excluir.`));

    if (deletions.length > 0) {
      await connection.addFlags(deletions, '\\Deleted');
      await connection.imap.expunge();
      console.log(chalk.green(` ${deletions.length} e-mails excluídos com sucesso.`));
    } else {
      console.log(chalk.yellow(' Nenhum e-mail antigo encontrado.'));
    }

    connection.end();
  } catch (err) {
    console.error(chalk.red(' Erro ao conectar ou processar:'), err.message);
  }
})();
