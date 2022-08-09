-- 错误系统

-- 日志系统数据库
DROP DATABASE IF EXISTS `error_logs`;
CREATE DATABASE `error_logs`;

-- 使用数据库
use `error_logs`;

-- 错误日志表 添加备注
DROP TABLE IF EXISTS `log_error`;
CREATE TABLE `log_error` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '标识ID',
  `type` tinyint(1) NOT NULL COMMENT '1-错误日志 2-警告日志 3-信息日志',
  `message` varchar(255) NOT NULL COMMENT '附加信息',
  `version` varchar(255) NOT NULL COMMENT '用来区分生产环境打包后的版本，如：source会根据版本信息放在版本文件夹下',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '错误时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='错误日志表';

