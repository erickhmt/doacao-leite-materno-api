require('dotenv').config()

module.exports = {
  development: {
    url: 'postgres://zlxgtkfsyblwcf:195027bb5f304cb4ea4b6faac6ab946db4d73506ff24b8c905b43706b407fa4c@ec2-52-70-15-120.compute-1.amazonaws.com:5432/d7tdb8slo0auua',
    dialect: 'postgres',
  },
  test: {
    url: 'postgres://zlxgtkfsyblwcf:195027bb5f304cb4ea4b6faac6ab946db4d73506ff24b8c905b43706b407fa4c@ec2-52-70-15-120.compute-1.amazonaws.com:5432/d7tdb8slo0auua',
    dialect: 'postgres',
  },
  production: {
    url: 'postgres://zlxgtkfsyblwcf:195027bb5f304cb4ea4b6faac6ab946db4d73506ff24b8c905b43706b407fa4c@ec2-52-70-15-120.compute-1.amazonaws.com:5432/d7tdb8slo0auua',
    dialect: 'postgres',
  },
}