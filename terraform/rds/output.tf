output "vpc_id" {
  description = "The ID of the VPC"
  value       = concat(aws_vpc.db_vpc.*.id, [""])[0]
}

output "vpc_arn" {
  description = "The ARN of the VPC"
  value       = concat(aws_vpc.db_vpc.*.arn, [""])[0]
}

output "vpc_cidr_block" {
  description = "The CIDR block of the VPC"
  value       = concat(aws_vpc.db_vpc.*.cidr_block, [""])[0]
}

output "default_security_group_id" {
  description = "The ID of the security group created by default on VPC creation"
  value       = concat(aws_vpc.db_vpc.*.default_security_group_id, [""])[0]
}

output "db_subnet_group_id" {
  description = "The db subnet group name"
  value       = element(concat(aws_db_subnet_group.db_subnet_group.*.id, [""]), 0)
}
