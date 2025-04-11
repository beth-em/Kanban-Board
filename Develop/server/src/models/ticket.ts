import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { User } from './user';

interface TicketAttributes {
  id: number;
  title: string;
  status: string;
  description: string;
  assignedUserId?: number;
}

interface TicketCreationAttributes extends Optional<TicketAttributes, 'id'> {}

export class Ticket extends Model<TicketAttributes, TicketCreationAttributes> implements TicketAttributes {
  public id!: number;
  public title!: string;
  public status!: string;
  public description!: string;
  public assignedUserId!: number;

  // associated User model
  public readonly assignedUser?: User;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function TicketFactory(sequelize: Sequelize): typeof Ticket {
  Ticket.init(
    {
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
    },
    {
      tableName: 'tickets',
      sequelize,
    }
  );

  return Ticket;
}
