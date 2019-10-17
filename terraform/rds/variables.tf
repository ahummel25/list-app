variable "aws_region" {
  description = "The AWS region to deploy to (e.g. us-east-1)"
}

variable "vpc_id" {
  description = "The VPC id"
}

variable "db_security_group_id" {
  description = "The security group id that the database tied to"
}

variable "db_subnet_group_name" {
  description = "The subnet group name that the database tied to"
}

variable "database_name" {
  description = "The name of the DB"
}

variable "database_identifier" {
  description = "The DB identifier"
}

variable "master_username" {
  description = "The username for the master user of the DB"
}

variable "master_password" {
  description = "The password for the master user of the DB"
}
