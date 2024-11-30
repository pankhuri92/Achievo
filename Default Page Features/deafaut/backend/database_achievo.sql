show databases;
create database achievo;
use achievo;
create table user_data(
	user_id int primary key,
    user_name varchar(50),
    user_email varchar(60),
    user_pwd varchar(70)
);
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'k443godmomsatija';
