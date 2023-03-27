#cucumber tag
tag=$1

export COMMON_CONFIG_FILE='env/common.env'

# run cucumber tests & generate the report using the postcucumber script even if the the test fails
# the postcucumber script only runs when test are succesfull so we need to add this to run it in case of failures
yarn run cucumber --profile $tag || yarn run postcucumber