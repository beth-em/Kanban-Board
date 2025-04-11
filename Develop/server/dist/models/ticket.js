import { DataTypes, Model } from 'sequelize';
export class Ticket extends Model {
}
export function TicketFactory(sequelize) {
    Ticket.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            field: 'title',
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assignedUserId: {
            type: DataTypes.INTEGER,
            field: 'assigneduser_id',
            allowNull: true,
        },
    }, {
        tableName: 'tickets',
        sequelize,
    });
    return Ticket;
}
