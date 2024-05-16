create database manager_tasks;
use manager_tasks;

CREATE TABLE tasks(
	id int auto_increment primary key,
    name_task varchar(255) not null,
    state_task enum('aberta', 'concluida'),
    date_task_create DATE 
);

SELECT* FROM tasks;
DELETE FROM estoque;