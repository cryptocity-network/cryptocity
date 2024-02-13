#!/bin/bash
 
if [[ $VERCEL_GIT_COMMIT_REF == "main"  ]] ; then 
  echo "This is our main branch"
  yarn build
else 
  echo "This is not our main branch"
#   yarn dato:sandbox
    set -e

    export NODE_OPTIONS=--max-old-space-size=16384

    if [ -z "$VERCEL_GIT_PULL_REQUEST_ID" ]; then
        echo "VERCEL_GIT_PULL_REQUEST_ID is not set"
        exit 1
    fi
    json_output=$(yarn datocms environments:list --json --api-token=$GRAPHQL_TOKEN)
    destination_env="preview-$VERCEL_GIT_PULL_REQUEST_ID"

    if echo "$json_output" | jq -r '.[] | .id' | grep -q "^$destination_env$"; then
        echo "Environment: $destination_env already exists"
        yarn datocms migrations:run --source=$destination_env --in-place --api-token=$GRAPHQL_TOKEN
    else
        echo "Environment: $destination_env doesn't exist"
        primary_env=$(yarn datocms environments:primary --log-level=NONE)
        yarn datocms migrations:run --source=$primary_env --destination=$destination_env --fast-fork --api-token=$DATOCMS_API_TOKEN
    fi
    yarn build
fi