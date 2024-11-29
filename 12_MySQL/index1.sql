show databases;
CREATE DATABASE mydatabase DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
/*
utf8 vs utf8mb4
-> 8은 특수문자나 여러가지 언어, 이모티콘 등 사용불가
-> 8mb4는 특수문자나 여러가지 언어(다국어), 이모티콘 등 사용가능(utf보다 더 많은 문자열 저장가능)
*/

--데이터 베이스 사용선언
USE sesac;

--테이블 목록 확인
SHOW TABLES

--데이터 베이스 삭제
DROP DATABASE mydatabase;

####################[테이블 관련 명령어]######################
/*
CREATE TABLE 테이블이름(
    속성이름1 데이터타입 제약조건(PK,FK,NULL이되는지 = 없어도됨),
    속성이름2 데이터타입 제약조건
);
*/
-- 제약조건
-- NOT NULL : null 허용 안함
-- AUTO_INCREMENT : 자동 숫자 증가
-- PRIMARY KEY : 기본키 설정(중복&null 허용 x)
-- DEFAULT : 기본값 설정
-- UNIQUE : 중복&null 허용 x => 한 테이블에 여러개 설정가능(PK와 다른점)

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

--테이블 목록 확인
SHOW TABLES;

--테이블 구조 확인
DESC products;

DROP Table products

--TABLE 속성 수정
ALTER TABLE products ADD new_column VARCHAR(20)

ALTER TABLE products MODIFY new_column int;

ALTER TABLE products DROP new_colum;

##################[여기부터 DML]##################
--데이터 조작어
--데이터 crud를 위해 사용하는 sql문
CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);
SHOW TABLES;

--create >> insert into
INSERT INTO user (name,age, address) VALUES('김민정',30,'서울특별시 강남구');
INSERT INTO user (name,age, address) VALUES('이지수',22,'서울특별시 마포구');
INSERT INTO user (name,age, address) VALUES('한솔이',23,'서울특별시 관악구');
INSERT INTO user (name,age, address) VALUES('한소희',25,'서울특별시 도봉구');
INSERT INTO user (name,age, address) VALUES('이형석',32,'대구광역시 동구');
INSERT INTO user (name,age, address) VALUES('정세희',33,'부산광역시 중구');
INSERT INTO user (name,age, address) VALUES('권순모',40,'서울특별시 노원구');
INSERT INTO user (name,age, address) VALUES('진현정',22,'서울특별시 중구');
INSERT INTO user (name,age, address) VALUES('권희수',24,'울산광역시 중구');
INSERT INTO user (name,age, address) VALUES('권혁수',27,'강원도 강릉시');
INSERT INTO user (name,age, address) VALUES('오유진',25,'충청남도 공주시');
INSERT INTO user (name,age, address) VALUES('박수진',21,'강원도 속초시');

-- crud -> r : select 문(SELECT 컬럼이름 FROM 테이블이름 [WHERE])

SELECT * FROM user; -- 전체 컬럼 전체 조회
SELECT name FROM user; -- 특정 컬럼 전체 조회
SELECT age, name FROM user; -- 특정 컬럼 2개 전체 조회

--where절을 이용해서 조건 걸기
SELECT * FROM user WHERE age >=25; --이상
SELECT * FROM user WHERE id=3; -- 일치비교
SELECT id,age FROM user WHERE name="권순모"; 

--like를 이용한 패턴 조회
SELECT * FROM user WHERE address LIKE '서울%'; -- 서울로 시작하는 주소값을 찾아옴
SELECT * FROM user WHERE name LIKE '__희'; -- 세글자 이름중 희로 끝나는 사람
SELECT * FROM user WHERE name LIKE '%희%'; -- 이름에 희가 어디든 들어간는 사람
SELECT * FROM user WHERE address LIKE '%광역시%' -- 광역시 주소인 사람

--in(list)
SELECT * FROM user WHERE age in(20,21,22,23) -- 나이가 20,21,22,23살 중 하나

--between a and b : a이상 b이하
SELECT * FROM user WHERE age BETWEEN 25 and 30 -- 25이상 30이하 (a,b 포함)

--is null, is not null
 INSERT INTO user(name, age) VALUES('서현승',28);
 --전체조회
 SELECT * FROM user;
--주소가 null인사람 조회
SELECT * FROM user WHERE address IS NULL;
--주소가 null이 아닌 사람 조회
SELECT * FROM user WHERE address IS NOT NULL;

--논리연산자
--주소가 null이 아니면서, age가 25초과인 전체 속성
SELECT * FROM user WHERE address IS NOT null AND age>25;

-- 최씨이고,나이가 22인 사람
SELECT * from user WHERE name LIKE "최%" AND age = 22;
--서울에 살거나 김씨인사람
SELECT * from user WHERE name LIKE "김%" OR address LIKE "서울%";
 
--order by, ditinct, limit
SELECT * FROM user ORDER BY age DESC; --age기준으로 내림차순
SELECT * FROM user where id > 6 ORDER BY age ASC; -- id가 6보다 큰것을 조회, age기준 오름차순 정렬

--distinct
SELECT age FROM user ORDER BY age ASC;
SELECT DISTINCT age FROM user ORDER BY age ASC; --중복값 없애주

--limit
--서울시에 사는 사람의 이름,주소만 불러오는데 2개만
SELECT name, address FROM user WHERE address like "서울%" ORDER BY name ASC LIMIT 3; 
-- order by와 limit 같이 사용할때는 order by를 먼저 사용해야함


