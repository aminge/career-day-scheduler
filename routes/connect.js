var connectionString = '';

if(process.env.DATABASE_URL != undefined) {
  connectionString = process.env.DATABASE_URL + 'ssl';
} else {
  connectionString = 'postgres://localhost:5432/career-day-scheduler';
}

module.exports = connectionString;