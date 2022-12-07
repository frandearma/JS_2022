/* CREO LA TABLA CURSO */
CREATE TABLE `curso`
(
    `id`            INT(11) NOT NULL auto_increment ,
    `name`          VARCHAR(255) NOT NULL ,
    `created_at`    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    `updated_at`    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    PRIMARY KEY (`id`),
    UNIQUE `idx_name_unique` (`name`(255))
) engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;

/* AGREGO INSERTS */
INSERT INTO curso(id,name)
VALUES
    (1,'JavaScript'),
    (2,'Python'),
    (3,'Java'),
    (4,'TypeScript'),
    (5,'C#'),
    (6,'PHP'),
    (7,'C++'),
    (8,'C'),
    (9,'Ruby');