-- Active: 1733128561519@@127.0.0.1@3306@sesac
SHOW DATABASES;
USE sesac;
CREATE TABLE visitor(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name varchar(10) NOT NULL,
    comment mediumtext  
);
DESC visitor;
-- 데이터 삽입
INSERT INTO visitor(name, comment) VALUES("홍길동","내가 왔다!_!");
INSERT INTO visitor VALUES(null,"이찬혁","으라차차ㅡㅅㅡ");
SELECT * FROM visitor;

UPDATE visitor SET comment="야호___!" WHERE id=2;
DELETE FROM visitor WHERE id=3;

###################DCL
-- MySQL 사용자 생성
CREATE USER 'sesac'@'%' IDENTIFIED BY '11234';
-- 권한 부여
GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;
SELECT user,plugin FROM mysql.user;


SHOW GRANTS FOR 'sesac'@'%';
SHOW GRANTS FOR 'root'@'localhost';

CREATE USER 'sesac2'@'%' IDENTIFIED WITH mysql_native_password BY '11234';
CREATE USER 'sesac3'@'%' IDENTIFIED WITH mysql_native_password BY '11234';

SELECT * FROM mysql.user;

select host, user, plugin from mysql.user;

drop user 'sesac2'@'%';