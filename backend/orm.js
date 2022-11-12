const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto(
    "w2p",
    "what2play",
    "what2play!",
    {
        host: "db-d4tf9.pub-cdb.ntruss.com",
        port: "3306",
        dialect: "mysql",
        logging:    console.log
//noAlias: true // as 별칭 미설정 여부
    }
);
auto.run((err)=>{
    if(err) throw err;
})
