create schema covid;

CREATE TABLE covid.companies(
     id serial primary key,
     nameCompany varchar(45),
     lots integer,
     vaccines bigint,
     stateBrazil varchar(45)
);
CREATE TABLE covid.peoples(
      id serial primary key,
      cpf bigint not null,
      name text not null,
      birth date,
      stateBrazil varchar(45),
      city varchar(45),
      company text not null,
      lot integer,
      dateOneShort date
);