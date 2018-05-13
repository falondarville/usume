module.exports = function(sequelize, DataTypes) {

	var UserData = sequelize.define("UserData", {
		skills: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	})
		UserData.associate = function(models){
			UserData.belongsTo(models.Users);
		};

	return UserData;
}