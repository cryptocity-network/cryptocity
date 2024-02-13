#!/bin/bash
 
# source .env
if [[ $VERCEL_GIT_COMMIT_REF == "main"  ]] ; then 
  echo "This is our main branch"
  yarn build
else 

  echo "This is not our main branch"
#   yarn dato:sandbox
    set -e

    export NODE_OPTIONS=--max-old-space-size=16384

    # if [ -z "text" ]; then
    #     echo text is not set"
    #     exit 1
    # fi
    json_output=$(yarn datocms environments:list --json --api-token=$FULL_ACCESS)
    destination_env="preview-$VERCEL_GIT_PULL_REQUEST_ID"
    echo $FULL_ACCESS

    if echo "$json_output" | jq -r '.[] | .id' | grep -q "^$destination_env$"; then
        echo "Environment: $destination_env already exists"
        yarn datocms migrations:run --source=$destination_env --in-place --api-token=$FULL_ACCESS
        export DATO_ENVIRONMENT="preview-$VERCEL_GIT_PULL_REQUEST_ID"
    else
        echo "Environment: $destination_env doesn't exist"
        primary_env=$(yarn datocms environments:primary --log-level=NONE --api-token=$FULL_ACCESS)
        echo $primary_env
        echo $destination_env
        # yarn datocms migrations:run --source=$primary_env --destination=$destination_env --fast-fork --api-token=$FULL_ACCESS
        yarn datocms migrations:run --destination=$destination_env --fast-fork --api-token=$FULL_ACCESS
        export DATO_ENVIRONMENT="preview-$VERCEL_GIT_PULL_REQUEST_ID"
    fi
    yarn build
    yarn preview
fi