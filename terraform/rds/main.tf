provider "aws" {
  region = "${var.aws_region}"
}


terraform {
  backend "s3" {
    bucket = "list-terraform-state"
    key    = "dev/state.json"
    region = "us-east-2"
  }
}

resource "aws_vpc" "db_vpc" {
  cidr_block       = "10.0.0.0/16"
  instance_tenancy = "dedicated"

  tags = {
    Name = "main"
  }
}

resource "aws_db_instance" "list_dev_db" {
  allocated_storage      = 20
  storage_type           = "gp2"
  engine                 = "mysql"
  engine_version         = "8.0"
  identifier             = "${var.database_identifier}"
  instance_class         = "db.m4.large"
  skip_final_snapshot    = true
  vpc_security_group_ids = ["${var.db_security_group_id}"]
  db_subnet_group_name   = "${var.db_subnet_group_name}"
  name                   = "${var.database_name}"
  username               = "${var.master_username}"
  password               = "${var.master_password}"
}

resource "aws_db_subnet_group" "db_subnet_group" {
  name       = "main"
  subnet_ids = ["subnet-05f0d4a6d3eb1e830", "subnet-0eb2f8940aeeff1ad", "subnet-0e76a323702e32791"]

  tags = {
    Name = "DB subnet group"
  }
}

resource "aws_subnet" "db_vpc_subnet_1" {
  vpc_id            = "${var.vpc_id}"
  cidr_block        = "10.0.0.0/24"
  availability_zone = "us-east-2a"
}

resource "aws_subnet" "db_vpc_subnet_2" {
  vpc_id            = "${var.vpc_id}"
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-2b"
}

resource "aws_subnet" "db_vpc_subnet_3" {
  vpc_id            = "${var.vpc_id}"
  cidr_block        = "10.0.2.0/24"
  availability_zone = "us-east-2c"
}

resource "aws_security_group" "mysql_security_group" {
  name   = "mysql-security-group"
  vpc_id = "${var.vpc_id}"

  tags = {
    Name = "MySQL-Security-Group"
  }
}
