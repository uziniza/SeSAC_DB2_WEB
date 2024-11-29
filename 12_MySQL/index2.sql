SHOW TABLES;
CREATE Table customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);
DESC customer

INSERT INTO customer VALUES ('aaa','손흥민','1992-03-17');
INSERT INTO customer VALUES ('bbb','황희찬','1997-11-01');
INSERT INTO customer VALUES ('ccc','이강인','2004-05-31');
INSERT INTO customer VALUES ('ddd','조현우','1992-03-17');

SELECT * from customer;

--외래키 테이블
-- on update cascade : 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경됨
-- ex) 회원 테이블(customer)의 id('aaa')가 변경되면 구매테이블(orderlist)의 customer_id가 같이 변경됨
-- on delete cascade : 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제
-- ex) 회원테이블(customer)의 데이터가 삭제되면 구매테이블(orderlist)의 데이터도 함께 삭제됨

CREATE TABLE orderlist(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT null,
    quantitiy INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
)

-- 테이블 삭제시,,
-- 1) 구매 테이블(orderlist)(=외래키가 있는 테이블) : 먼저 삭제
-- 2) 회원 테이블(customer)(=외래키의 참조되는 키인 기본키가 있는 테이블) : 나중 삭제
 DESC orderlist;
 
 INSERT INTO orderlist(customer_id, product_name, quantitiy)
 VALUES('aaa','맥북',1);
 INSERT INTO orderlist(customer_id, product_name, quantitiy)
 VALUES('bbb','빅파이',31);
 INSERT INTO orderlist(customer_id, product_name, quantitiy)
 VALUES('ccc','키보드',3);
 INSERT INTO orderlist(customer_id, product_name, quantitiy)
 VALUES('bbb','초코파이',5);
 INSERT INTO orderlist(customer_id, product_name, quantitiy)
 VALUES('ccc','귀여운 텀블러',2);

-- customer 테이블에 없는 회원은 구매할 수 없음
--  INSERT INTO orderlist(customer_id, product_name, quantitiy)
--  VALUES('eee','맥북',1)\
SELECT * FROM orderlist;

--###########################################
-- join : 두테이블을 묶어서 하나의 테이비ㅡㄹ로 만듬

-- 1) inner join
-- a. innerjoin과 on 사용
SELECT * FROM customer INNER JOIN orderlist ON customer.id=orderlist.customer_id;

-- b. where로 inner join 사용
SELECT * FROM customer, orderlist WHERE customer.id=orderlist.customer_id;

-- c. innerjoin과 on 사용, where로 조회조건 추가
SELECT * FROM customer INNER JOIN orderlist ON customer.id=orderlist.customer_id WHERE quantitiy>=5;

-- d. where로 inner join 사용 조회조건 추가
SELECT * FROM customer, orderlist WHERE customer.id=orderlist.customer_id AND quantitiy>=5;
--where 조인조건 and 조회조건;

-- e. 특정 컬럼 조회
SELECT orderlist.id, customer.id, customer.name, orderlist.product_name, orderlist.quantitiy
FROM orderlist, customer
WHERE customer.id=orderlist.customer_id;

-- f. table에 별칭 지어서 접근(as)
SELECT c.id, o.customer_id, c.name, o.product_name, o.quantitiy
FROM customer as c, orderlist as o
WHERE c.id=o.customer_id;

-- 2) left outer join
SELECT * FROM orderlist LEFT OUTER JOIN customer
ON orderlist.customer_id=customer.id;
 
-- 3) right outer join
SELECT * FROM orderlist RIGHT OUTER JOIN customer
ON orderlist.customer_id=customer.id;

-- 4) natural join
SELECT * FROM orderlist NATURAL JOIN customer; -- column의 이름이 같은게 없기 때문에 안됨(외래키로 연결된 것이 이름이 다르게 되어 있기 때문)

-- DCL
DESC mysql.user;
SELECT * FROM mysql.user;

CREATE USER 'user2'@'localhost' IDENTIFIED BY '0000';

SHOW GRANTS FOR 'user2'@'localhost'; --(권한 확인)권한 없음..
DROP USER 'user2'@'localhost';

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password
by '1234'; --비밀번호 변경