#!/bin/bash

# source .env
  echo "This is not our main branch"
#   yarn dato:sandbox
    set -e

    export NODE_OPTIONS=--max-old-space-size=16384
    echo "preview-$GIT_PR_REF"
    # if [ -z "text" ]; then
    #     echo text is not set"
    #     exit 1
    # fi
    json_output=$(yarn datocms environments:list --json --api-token=$FULL_ACCESS)
    destination_env="preview-$GIT_PR_REF"
    echo $FULL_ACCESS

    # if echo "$json_output" | jq -r '.[] | .id' | grep -q "^$destination_env$"; then
    #     echo "Environment: $destination_env already exists"
    #     yarn datocms migrations:run --source=$destination_env --in-place --api-token=$FULL_ACCESS
    #     export DATO_ENVIRONMENT="preview-$VERCEL_GIT_PULL_REQUEST_ID"
    # else
    #     echo "Environment: $destination_env doesn't exist"
    #     primary_env=$(yarn datocms environments:primary --log-level=NONE --api-token=$FULL_ACCESS)
    #     # yarn datocms migrations:run --source=$primary_env --destination=$destination_env --fast-fork --api-token=$FULL_ACCESS
    # fi
    yarn datocms migrations
    yarn run datocms migrations:run --destination=$destination_env --fast-fork --api-token=$FULL_ACCESS
    export DATO_ENVIRONMENT="preview-$GIT_PR_REF"
    yarn run build
fi