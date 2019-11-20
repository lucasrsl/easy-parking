CREATE TABLE IF NOT EXISTS cars(id INTEGER PRIMARY KEY AUTOINCREMENT, placa TEXT, marca TEXT, modelo TEXT, cor TEXT, entrada TEXT, saida TEXT, is_active INTEGER);
 
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, usuario TEXT, senha TEXT, nome TEXT, user_type INTEGER);
INSERT or IGNORE INTO users VALUES (1, 'admin', '123456', 'Administrador', 1);

CREATE TABLE IF NOT EXISTS scale(id INTEGER PRIMARY KEY AUTOINCREMENT, user_id integer, dia TEXT, entrada TEXT, duracao TEXT);