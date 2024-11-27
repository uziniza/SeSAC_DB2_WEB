show databases;
-- 실습1
CREATE DATABASE usedobong CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE usedobong;
CREATE TABLE member(
    id varchar(20) NOT NULL PRIMARY KEY,
    name varchar(5) NOT NULL,
    age int NULL,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50) NULL,
    promotion VARCHAR(2) NULL 
);
SHOW TABLES;
DESC member;
-- 실습2
ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member DROP age;
ALTER TABLE member ADD interest varchar(100) NULL;

-- 실습3
CREATE TABLE user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE not NULL,
    age INT(3) not null default 0
);


--실습 4
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("hong1234","8obkg","홍길동","M","1990-01-31",33);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("sexysung","87wjkdf","성춘향","F","1992-03-31",31);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("power70","qxur8sda","변사또","M","1970-05-02",53);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("hanjo","jk48fn4","한조","M","1984-10-18",39);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("widowmaker","38ewifh3","위도우","F","1976-06-27",47);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("dvadva","8k3f3ah","송하나","F","2001-06-03",22);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("jungkrat","4ifha7f","정크랫","M","1999-11-11",24);

ALTER TABLE user CHANGE bierthday birthday DATE NOT NULL;
DESC USER;
SHOW TABLES;

--실습 5

SELECT * FROM user ORDER BY birthday ASC;
SELECT gender, name FROM user where gender = "M" ORDER BY name DESC;
SELECT id, name FROM user where birthday LIKE "1990%";
SELECT * FROM user WHERE birthday LIKE "%06%" ORDER BY birthday ASC;
SELECT * FROM user WHERE gender = "M" AND birthday BETWEEN 1970 AND 1979;