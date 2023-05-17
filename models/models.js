const sequelize = require('../db')
const { DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Teacher = sequelize.define('teacher', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull:false },
    subject: {type: DataTypes.STRING },
    achivement: {type: DataTypes.STRING },
    img: {type: DataTypes.STRING }
})

const Audience = sequelize.define('audience', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING },
    name: {type: DataTypes.STRING },
})

const AudienceInfo = sequelize.define('audience_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING },
    title: {type: DataTypes.STRING },
    description: {type: DataTypes.STRING },
})

const StudentWork = sequelize.define('studentwork', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    author: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING }
})

const StudyPlan = sequelize.define('studyplan', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
})

Audience.hasMany(AudienceInfo, {as: 'info'});
AudienceInfo.belongsTo(Audience)

module.exports = {User, Teacher, Audience, AudienceInfo, StudentWork, StudyPlan}