#!/bin/bash
    set -e

    export NODE_OPTIONS=--max-old-space-size=16384

    if [ -z $GIT_PR_REF ]; then
        echo "GIT_PR_REF is not set"
        exit 1
    fi
    json_output=$(yarn datocms environments:list --json --api-token=$FULL_ACCESS)
    destination_env="preview-$GIT_PR_REF"

    if echo "$json_output" | jq -r '.[] | .id' | grep -q "^$destination_env$"; then
        echo "Environment: $destination_env already exists"
        yarn datocms migrations:run --source=$destination_env --in-place --api-token=$FULL_ACCESS
        export DATO_ENVIRONMENT="preview-$GIT_PR_REF"
    else
        echo "Environment: $destination_env doesn't exist"
        primary_env=$(yarn datocms environments:primary --log-level=NONE --api-token=$FULL_ACCESS)
        yarn datocms migrations:run --destination=$destination_env --fast-fork --api-token=$FULL_ACCESS
    fi
fi