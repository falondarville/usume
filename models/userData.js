module.exports = function(sequelize, DataTypes) {

	var UserData = sequelize.define("UserData", {
		skills: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		environment: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		relationships: {
			type: DataTypes.STRING,
			allowNull: false
		},
		priorities: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		personality: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		workGoals: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		lifeGoals: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		accomodations: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	})
		UserData.associate = function(models){
			UserData.belongsTo(models.Users);
		};

	return UserData;
}