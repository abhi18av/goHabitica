define({ "api": [
  {
    "type": "post",
    "url": "/api/v3/challenges",
    "title": "Create a new challenge",
    "name": "CreateChallenge",
    "group": "Challenge",
    "description": "<p>Creates a challenge. Cannot create associated tasks with this route. See <a href=\"#api-Task-CreateChallengeTasks\">CreateChallengeTasks</a>.</p>",
    "parameter": {
      "fields": {
        "Body Parameters": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "challenge",
            "description": "<p>An object representing the challenge to be created</p>"
          },
          {
            "group": "Body",
            "type": "UUID",
            "optional": false,
            "field": "challenge.groupId",
            "description": "<p>The id of the group to which the challenge belongs</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "challenge.name",
            "description": "<p>The full name of the challenge</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "challenge.shortName",
            "description": "<p>A shortened name for the challenge, to be used as a tag</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "challenge.description",
            "description": "<p>A description of the challenge</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "official",
            "defaultValue": "false",
            "description": "<p>Whether or not a challenge is an official Habitica challenge (requires admin)</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "challenge.prize",
            "defaultValue": "0",
            "description": "<p>Number of gems offered as a prize to challenge winner</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "challenge",
            "description": "<p>The newly created challenge.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.group._id",
            "description": "<p>The group id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.group.type",
            "description": "<p>Group type: <code>guild</code> or <code>party</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.group.privacy",
            "description": "<p>Group privacy: <code>public</code> or <code>private</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.name",
            "description": "<p>Full name of challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.shortName",
            "description": "<p>A shortened name for the challenge, to be used as a tag.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader",
            "description": "<p>User details of challenge leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.leader._id",
            "description": "<p>User id of challenge leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader.profile",
            "description": "<p>Profile information of leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader.profile.name",
            "description": "<p>Display Name of leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.updatedAt",
            "description": "<p>Timestamp of last update.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.createdAt",
            "description": "<p>Timestamp of challenge creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.id",
            "description": "<p>Id number of newly created challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge._id",
            "description": "<p>Same as <code>challenge.id</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.prize",
            "description": "<p>Number of gems offered as prize to winner (can be 0).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.memberCount",
            "description": "<p>Number users participating in challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.tasksOrder",
            "description": "<p>Object containing IDs of the challenge's tasks and rewards in their preferred sort order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.rewards",
            "description": "<p>Array of <code>reward</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.todos",
            "description": "<p>Array of <code>todo</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.dailys",
            "description": "<p>Array of <code>daily</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.habits",
            "description": "<p>Array of <code>habit</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "challenge.official",
            "description": "<p>Boolean indicating if this is an official Habitica challenge.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucessfull response with single challenge",
          "content": "{\n  \"data\": {\n    \"group\": {\n     \"_id\": \"group-id-associated-with-challenge\",\n     \"name\": \"MyGroup\",\n     \"type\": \"guild\",\n     \"privacy\": \"public\"\n    },\n    \"name\": \"Long Detailed Name of Challenge\",\n    \"shortName\": \"my challenge\",\n    \"leader\": {\n      \"_id\": \"user-id-of-challenge-creator\",\n      \"profile\": {\n        \"name\": \"MyUserName\"\n      }\n    },\n    \"updatedAt\": \"timestamp,\n    \"createdAt\": \"timestamp\",\n    \"_id\": \"challenge-id\",\n    \"prize\": 0,\n    \"memberCount\": 1,\n    \"tasksOrder\": {\n      \"rewards\": [\n        \"uuid-of-challenge-reward\"\n      ],\n      \"todos\": [\n        \"uuid-of-challenge-todo\"\n      ],\n      \"dailys\": [\n        \"uuid-of-challenge-daily\"\n      ],\n      \"habits\": [\n        \"uuid-of-challenge-habit\"\n      ]\n    },\n    \"official\": false,\n    \"id\": \"challenge-id\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "ChallengeValidationFailed",
            "description": "<p>Invalid or missing parameter in challenge body.</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "CantAffordPrize",
            "description": "<p>User does not have enough gems to offer this prize.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/challenges.js",
    "groupTitle": "Challenge"
  },
  {
    "type": "delete",
    "url": "/api/v3/challenges/:challengeId",
    "title": "Delete a challenge",
    "name": "DeleteChallenge",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "challengeId",
            "description": "<p>The _id for the challenge to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/challenges.js",
    "groupTitle": "Challenge",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/challenges/:challengeId/export/csv",
    "title": "Export a challenge in CSV",
    "name": "ExportChallengeCsv",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "challengeId",
            "description": "<p>The challenge _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge",
            "description": "<p>A csv file</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/challenges.js",
    "groupTitle": "Challenge",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/challenges/:challengeId",
    "title": "Get a challenge given its id",
    "name": "GetChallenge",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "challengeId",
            "description": "<p>The challenge _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The challenge object</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.group._id",
            "description": "<p>The group id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.group.type",
            "description": "<p>Group type: <code>guild</code> or <code>party</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.group.privacy",
            "description": "<p>Group privacy: <code>public</code> or <code>private</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.name",
            "description": "<p>Full name of challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.shortName",
            "description": "<p>A shortened name for the challenge, to be used as a tag.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader",
            "description": "<p>User details of challenge leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.leader._id",
            "description": "<p>User id of challenge leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader.profile",
            "description": "<p>Profile information of leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader.profile.name",
            "description": "<p>Display Name of leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.updatedAt",
            "description": "<p>Timestamp of last update.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.createdAt",
            "description": "<p>Timestamp of challenge creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.id",
            "description": "<p>Id number of newly created challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge._id",
            "description": "<p>Same as <code>challenge.id</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.prize",
            "description": "<p>Number of gems offered as prize to winner (can be 0).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.memberCount",
            "description": "<p>Number users participating in challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.tasksOrder",
            "description": "<p>Object containing IDs of the challenge's tasks and rewards in their preferred sort order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.rewards",
            "description": "<p>Array of <code>reward</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.todos",
            "description": "<p>Array of <code>todo</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.dailys",
            "description": "<p>Array of <code>daily</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.habits",
            "description": "<p>Array of <code>habit</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "challenge.official",
            "description": "<p>Boolean indicating if this is an official Habitica challenge.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucessfull response with single challenge",
          "content": "{\n  \"data\": {\n    \"group\": {\n     \"_id\": \"group-id-associated-with-challenge\",\n     \"name\": \"MyGroup\",\n     \"type\": \"guild\",\n     \"privacy\": \"public\"\n    },\n    \"name\": \"Long Detailed Name of Challenge\",\n    \"shortName\": \"my challenge\",\n    \"leader\": {\n      \"_id\": \"user-id-of-challenge-creator\",\n      \"profile\": {\n        \"name\": \"MyUserName\"\n      }\n    },\n    \"updatedAt\": \"timestamp,\n    \"createdAt\": \"timestamp\",\n    \"_id\": \"challenge-id\",\n    \"prize\": 0,\n    \"memberCount\": 1,\n    \"tasksOrder\": {\n      \"rewards\": [\n        \"uuid-of-challenge-reward\"\n      ],\n      \"todos\": [\n        \"uuid-of-challenge-todo\"\n      ],\n      \"dailys\": [\n        \"uuid-of-challenge-daily\"\n      ],\n      \"habits\": [\n        \"uuid-of-challenge-habit\"\n      ]\n    },\n    \"official\": false,\n    \"id\": \"challenge-id\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/challenges.js",
    "groupTitle": "Challenge",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/challenges/groups/:groupId",
    "title": "Get challenges for a group",
    "description": "<p>Get challenges that the user is a member, public challenges and the ones from the user's groups.</p>",
    "name": "GetGroupChallenges",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>An array of challenges sorted with official challenges first, followed by the challenges in order from newest to oldest</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.group._id",
            "description": "<p>The group id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.group.type",
            "description": "<p>Group type: <code>guild</code> or <code>party</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.group.privacy",
            "description": "<p>Group privacy: <code>public</code> or <code>private</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.name",
            "description": "<p>Full name of challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.shortName",
            "description": "<p>A shortened name for the challenge, to be used as a tag.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader",
            "description": "<p>User details of challenge leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.leader._id",
            "description": "<p>User id of challenge leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader.profile",
            "description": "<p>Profile information of leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader.profile.name",
            "description": "<p>Display Name of leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.updatedAt",
            "description": "<p>Timestamp of last update.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.createdAt",
            "description": "<p>Timestamp of challenge creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.id",
            "description": "<p>Id number of newly created challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge._id",
            "description": "<p>Same as <code>challenge.id</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.prize",
            "description": "<p>Number of gems offered as prize to winner (can be 0).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.memberCount",
            "description": "<p>Number users participating in challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.tasksOrder",
            "description": "<p>Object containing IDs of the challenge's tasks and rewards in their preferred sort order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.rewards",
            "description": "<p>Array of <code>reward</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.todos",
            "description": "<p>Array of <code>todo</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.dailys",
            "description": "<p>Array of <code>daily</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.habits",
            "description": "<p>Array of <code>habit</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "challenge.official",
            "description": "<p>Boolean indicating if this is an official Habitica challenge.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucessful response with array of challenges",
          "content": "{\n  \"data\": [{\n    \"group\": {\n      \"_id\": \"group-id-associated-with-challenge\",\n      \"name\": \"MyGroup\",\n      \"type\": \"guild\",\n      \"privacy\": \"public\"\n    },\n    \"name\": \"Long Detailed Name of Challenge\",\n    \"shortName\": \"my challenge\",\n    \"leader\": {\n      \"_id\": \"user-id-of-challenge-creator\",\n      \"profile\": {\n        \"name\": \"MyUserName\"\n      }\n    },\n    \"updatedAt\": \"timestamp,\n    \"createdAt\": \"timestamp\",\n    \"_id\": \"challenge-id\",\n    \"prize\": 0,\n    \"memberCount\": 1,\n    \"tasksOrder\": {\n      \"rewards\": [\n        \"uuid-of-challenge-reward\"\n      ],\n      \"todos\": [\n        \"uuid-of-challenge-todo\"\n      ],\n      \"dailys\": [\n        \"uuid-of-challenge-daily\"\n      ],\n      \"habits\": [\n        \"uuid-of-challenge-habit\"\n      ]\n    },\n    \"official\": false,\n    \"id\": \"challenge-id\"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/challenges.js",
    "groupTitle": "Challenge",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/challenges/user",
    "title": "Get challenges for a user.",
    "name": "GetUserChallenges",
    "group": "Challenge",
    "description": "<p>Get challenges the user has access to. Includes public challenges, challenges belonging to the user's group, and challenges the user has already joined.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "challenges",
            "description": "<p>An array of challenges sorted with official challenges first, followed by the challenges in order from newest to oldest</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.group._id",
            "description": "<p>The group id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.group.type",
            "description": "<p>Group type: <code>guild</code> or <code>party</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.group.privacy",
            "description": "<p>Group privacy: <code>public</code> or <code>private</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.name",
            "description": "<p>Full name of challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.shortName",
            "description": "<p>A shortened name for the challenge, to be used as a tag.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader",
            "description": "<p>User details of challenge leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.leader._id",
            "description": "<p>User id of challenge leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader.profile",
            "description": "<p>Profile information of leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader.profile.name",
            "description": "<p>Display Name of leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.updatedAt",
            "description": "<p>Timestamp of last update.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.createdAt",
            "description": "<p>Timestamp of challenge creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.id",
            "description": "<p>Id number of newly created challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge._id",
            "description": "<p>Same as <code>challenge.id</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.prize",
            "description": "<p>Number of gems offered as prize to winner (can be 0).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.memberCount",
            "description": "<p>Number users participating in challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.tasksOrder",
            "description": "<p>Object containing IDs of the challenge's tasks and rewards in their preferred sort order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.rewards",
            "description": "<p>Array of <code>reward</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.todos",
            "description": "<p>Array of <code>todo</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.dailys",
            "description": "<p>Array of <code>daily</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.habits",
            "description": "<p>Array of <code>habit</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "challenge.official",
            "description": "<p>Boolean indicating if this is an official Habitica challenge.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucessful response with array of challenges",
          "content": "{\n  \"data\": [{\n    \"group\": {\n      \"_id\": \"group-id-associated-with-challenge\",\n      \"name\": \"MyGroup\",\n      \"type\": \"guild\",\n      \"privacy\": \"public\"\n    },\n    \"name\": \"Long Detailed Name of Challenge\",\n    \"shortName\": \"my challenge\",\n    \"leader\": {\n      \"_id\": \"user-id-of-challenge-creator\",\n      \"profile\": {\n        \"name\": \"MyUserName\"\n      }\n    },\n    \"updatedAt\": \"timestamp,\n    \"createdAt\": \"timestamp\",\n    \"_id\": \"challenge-id\",\n    \"prize\": 0,\n    \"memberCount\": 1,\n    \"tasksOrder\": {\n      \"rewards\": [\n        \"uuid-of-challenge-reward\"\n      ],\n      \"todos\": [\n        \"uuid-of-challenge-todo\"\n      ],\n      \"dailys\": [\n        \"uuid-of-challenge-daily\"\n      ],\n      \"habits\": [\n        \"uuid-of-challenge-habit\"\n      ]\n    },\n    \"official\": false,\n    \"id\": \"challenge-id\"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/challenges.js",
    "groupTitle": "Challenge",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/challenges/:challengeId/join",
    "title": "Join a challenge",
    "name": "JoinChallenge",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "challengeId",
            "description": "<p>The challenge _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge",
            "description": "<p>The challenge the user joined</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.group._id",
            "description": "<p>The group id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.group.type",
            "description": "<p>Group type: <code>guild</code> or <code>party</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.group.privacy",
            "description": "<p>Group privacy: <code>public</code> or <code>private</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.name",
            "description": "<p>Full name of challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.shortName",
            "description": "<p>A shortened name for the challenge, to be used as a tag.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader",
            "description": "<p>User details of challenge leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.leader._id",
            "description": "<p>User id of challenge leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader.profile",
            "description": "<p>Profile information of leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.leader.profile.name",
            "description": "<p>Display Name of leader.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.updatedAt",
            "description": "<p>Timestamp of last update.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.createdAt",
            "description": "<p>Timestamp of challenge creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge.id",
            "description": "<p>Id number of newly created challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "challenge._id",
            "description": "<p>Same as <code>challenge.id</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.prize",
            "description": "<p>Number of gems offered as prize to winner (can be 0).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "challenge.memberCount",
            "description": "<p>Number users participating in challenge.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "challenge.tasksOrder",
            "description": "<p>Object containing IDs of the challenge's tasks and rewards in their preferred sort order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.rewards",
            "description": "<p>Array of <code>reward</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.todos",
            "description": "<p>Array of <code>todo</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.dailys",
            "description": "<p>Array of <code>daily</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "challenge.tasksOrder.habits",
            "description": "<p>Array of <code>habit</code> task IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "challenge.official",
            "description": "<p>Boolean indicating if this is an official Habitica challenge.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucessfull response with single challenge",
          "content": "{\n  \"data\": {\n    \"group\": {\n     \"_id\": \"group-id-associated-with-challenge\",\n     \"name\": \"MyGroup\",\n     \"type\": \"guild\",\n     \"privacy\": \"public\"\n    },\n    \"name\": \"Long Detailed Name of Challenge\",\n    \"shortName\": \"my challenge\",\n    \"leader\": {\n      \"_id\": \"user-id-of-challenge-creator\",\n      \"profile\": {\n        \"name\": \"MyUserName\"\n      }\n    },\n    \"updatedAt\": \"timestamp,\n    \"createdAt\": \"timestamp\",\n    \"_id\": \"challenge-id\",\n    \"prize\": 0,\n    \"memberCount\": 1,\n    \"tasksOrder\": {\n      \"rewards\": [\n        \"uuid-of-challenge-reward\"\n      ],\n      \"todos\": [\n        \"uuid-of-challenge-todo\"\n      ],\n      \"dailys\": [\n        \"uuid-of-challenge-daily\"\n      ],\n      \"habits\": [\n        \"uuid-of-challenge-habit\"\n      ]\n    },\n    \"official\": false,\n    \"id\": \"challenge-id\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/challenges.js",
    "groupTitle": "Challenge",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/challenges/:challengeId/leave",
    "title": "Leave a challenge",
    "name": "LeaveChallenge",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "challengeId",
            "description": "<p>The challenge _id</p>"
          }
        ],
        "Body Parameters": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"remove-all\"",
              "\"keep-all\""
            ],
            "optional": true,
            "field": "keep",
            "defaultValue": "keep-all",
            "description": "<p>Whether or not to keep or remove the challenge's tasks</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/challenges.js",
    "groupTitle": "Challenge",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/challenges/:challengeId/selectWinner/:winnerId",
    "title": "Select winner for challenge",
    "name": "SelectChallengeWinner",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "challengeId",
            "description": "<p>The _id for the challenge to close with a winner</p>"
          },
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "winnerId",
            "description": "<p>The _id of the winning user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/challenges.js",
    "groupTitle": "Challenge",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/api/v3/challenges/:challengeId",
    "title": "Update the name, description, or leader of a challenge.",
    "name": "UpdateChallenge",
    "group": "Challenge",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "challengeId",
            "description": "<p>The challenge _id</p>"
          }
        ],
        "Body Parameters": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "challenge.name",
            "description": "<p>The new full name of the challenge.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "challenge.description",
            "description": "<p>The new challenge description.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "challenge.leader",
            "description": "<p>The UUID of the new challenge leader.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated challenge</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucessfull response with single challenge",
          "content": "{\n  \"data\": {\n    \"group\": {\n     \"_id\": \"group-id-associated-with-challenge\",\n     \"name\": \"MyGroup\",\n     \"type\": \"guild\",\n     \"privacy\": \"public\"\n    },\n    \"name\": \"Long Detailed Name of Challenge\",\n    \"shortName\": \"my challenge\",\n    \"leader\": {\n      \"_id\": \"user-id-of-challenge-creator\",\n      \"profile\": {\n        \"name\": \"MyUserName\"\n      }\n    },\n    \"updatedAt\": \"timestamp,\n    \"createdAt\": \"timestamp\",\n    \"_id\": \"challenge-id\",\n    \"prize\": 0,\n    \"memberCount\": 1,\n    \"tasksOrder\": {\n      \"rewards\": [\n        \"uuid-of-challenge-reward\"\n      ],\n      \"todos\": [\n        \"uuid-of-challenge-todo\"\n      ],\n      \"dailys\": [\n        \"uuid-of-challenge-daily\"\n      ],\n      \"habits\": [\n        \"uuid-of-challenge-habit\"\n      ]\n    },\n    \"official\": false,\n    \"id\": \"challenge-id\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "ChallengeLeader",
        "title": "Challenge Leader",
        "description": "<p>The leader of the challenge can use this route.</p>"
      }
    ],
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "MustBeChallengeLeader",
            "description": "<p>Only challenge leader can update the challenge.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/challenges.js",
    "groupTitle": "Challenge"
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/chat/:chatId/clearflags",
    "title": "Clear flags",
    "description": "<p>Resets the flag count on a chat message. Retains the id of the user's that have flagged the message. (Only visible to moderators)</p>",
    "permission": [
      {
        "name": "Admin",
        "title": "Moderators",
        "description": "<p>Contributors of tier 8 or higher can use this route.</p>"
      }
    ],
    "name": "ClearFlags",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          },
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "chatId",
            "description": "<p>The chat message id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotAuthorized",
            "optional": false,
            "field": "MustBeAdmin",
            "description": "<p>Must be a moderator to use this route</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "MessageNotFound",
            "description": "<p>The specified message could not be found.</p>"
          },
          {
            "group": "404",
            "type": "badRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A group ID is required</p>"
          },
          {
            "group": "404",
            "type": "badRequest",
            "optional": false,
            "field": "chatIdRequired",
            "description": "<p>A chat ID is required</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/chat.js",
    "groupTitle": "Chat"
  },
  {
    "type": "delete",
    "url": "/api/v3/groups/:groupId/chat/:chatId",
    "title": "Delete chat message from a group",
    "name": "DeleteChat",
    "group": "Chat",
    "description": "<p>Delete's a chat message from a group</p>",
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query",
            "type": "UUID",
            "optional": false,
            "field": "previousMsg",
            "description": "<p>The last message's ID fetched by the client so that the whole chat will be returned only if new messages have been posted in the meantime</p>"
          }
        ],
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          },
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "chatId",
            "description": "<p>The chat message id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "data",
            "description": "<p>The updated chat array or an empty object if no message was posted after previousMsg</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "onlyCreatorOrAdminCanDeleteChat",
            "description": "<p>Only the creator of the message and admins can delete a chat message</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "MessageNotFound",
            "description": "<p>The specified message could not be found.</p>"
          },
          {
            "group": "404",
            "type": "badRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A group ID is required</p>"
          },
          {
            "group": "404",
            "type": "badRequest",
            "optional": false,
            "field": "chatIdRequired",
            "description": "<p>A chat ID is required</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/chat.js",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/chat/:chatId/flag",
    "title": "Flag a group chat message",
    "description": "<p>A message will be hidden from chat if two or more users flag a message. It will be hidden immediately if a moderator flags the message. An email is sent to the moderators about every flagged message.</p>",
    "name": "FlagChat",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          },
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "chatId",
            "description": "<p>The chat message id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The flagged chat message</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "data.id",
            "description": "<p>The id of the message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.text",
            "description": "<p>The text of the message</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.timestamp",
            "description": "<p>The timestamp of the message in milliseconds</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.likes",
            "description": "<p>The likes of the message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.flags",
            "description": "<p>The flags of the message</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.flagCount",
            "description": "<p>The number of flags the message has</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "data.uuid",
            "description": "<p>The user id of the author of the message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user",
            "description": "<p>The username of the author of the message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "AlreadyFlagged",
            "description": "<p>Chat messages cannot be flagged more than once by a user</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "messageGroupChatFlagAlreadyReported",
            "description": "<p>The message has already been flagged</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "MessageNotFound",
            "description": "<p>The specified message could not be found.</p>"
          },
          {
            "group": "404",
            "type": "badRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A group ID is required</p>"
          },
          {
            "group": "404",
            "type": "badRequest",
            "optional": false,
            "field": "chatIdRequired",
            "description": "<p>A chat ID is required</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/chat.js",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/api/v3/groups/:groupId/chat",
    "title": "Get chat messages from a group",
    "name": "GetChat",
    "group": "Chat",
    "description": "<p>Fetches an array of messages from a group</p>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>An array of <a href='https://github.com/HabitRPG/habitica/blob/develop/website/server/models/group.js#L51' target='_blank'>chat messages</a></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/chat.js",
    "groupTitle": "Chat",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "badRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A group ID is required</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/chat/:chatId/like",
    "title": "Like a group chat message",
    "name": "LikeChat",
    "group": "Chat",
    "description": "<p>Likes a chat message from a group</p>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          },
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "chatId",
            "description": "<p>The chat message _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The liked <a href='https://github.com/HabitRPG/habitica/blob/develop/website/server/models/group.js#L51' target='_blank'>chat message</a></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotFound",
            "optional": false,
            "field": "messageGroupChatLikeOwnMessage",
            "description": "<p>A user can't like their own message</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "MessageNotFound",
            "description": "<p>The specified message could not be found.</p>"
          },
          {
            "group": "404",
            "type": "badRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A group ID is required</p>"
          },
          {
            "group": "404",
            "type": "badRequest",
            "optional": false,
            "field": "chatIdRequired",
            "description": "<p>A chat ID is required</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/chat.js",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/chat",
    "title": "Post chat message to a group",
    "name": "PostChat",
    "group": "Chat",
    "description": "<p>Posts a chat message to a group</p>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          }
        ],
        "Body Parameters": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message The message to post</p>"
          }
        ],
        "Query Parameters": [
          {
            "group": "Query",
            "type": "UUID",
            "optional": false,
            "field": "previousMsg",
            "description": "<p>The previous chat message's UUID which will force a return of the full group chat</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotFound",
            "optional": false,
            "field": "ChatPriviledgesRevoked",
            "description": "<p>Your chat privileges have been revoked</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "badRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A group ID is required</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/chat.js",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/chat/seen",
    "title": "Mark all messages as read for a group",
    "name": "SeenChat",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/chat.js",
    "groupTitle": "Chat",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "badRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A group ID is required</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/content",
    "title": "Get all available content objects",
    "description": "<p>Does not require authentication.</p>",
    "name": "ContentGet",
    "group": "Content",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"bg\"",
              "\"cs\"",
              "\"da\"",
              "\"de\"",
              "\"en\"",
              "\"en@pirate\"",
              "\"en_GB\"",
              "\"es\"",
              "\"es_419\"",
              "\"fr\"",
              "\"he\"",
              "\"hu\"",
              "\"id\"",
              "\"it\"",
              "\"ja\"",
              "\"nl\"",
              "\"pl\"",
              "\"pt\"",
              "\"pt_BR\"",
              "\"ro\"",
              "\"ru\"",
              "\"sk\"",
              "\"sr\"",
              "\"sv\"",
              "\"uk\"",
              "\"zh\"",
              "\"zh_TW\""
            ],
            "optional": true,
            "field": "language",
            "defaultValue": "en",
            "description": "<p>Query parameter, the  language code used for the items' strings. If the authenticated user makes the request, the content will return with the user's configured language.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Various data about the content of Habitica. The content route contains many keys, but the data listed below are the recomended data to use.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.mystery",
            "description": "<p>The mystery sets awarded to paying subscribers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.gear",
            "description": "<p>The gear that can be equipped.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.gear.tree",
            "description": "<p>Detailed information about the gear, organized by type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.gear.flat",
            "description": "<p>The full key of each equipment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.spells",
            "description": "<p>The skills organized by class. Includes cards and visual buffs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.potion",
            "description": "<p>Data about the health potion.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.armoire",
            "description": "<p>Data about the armoire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.classes",
            "description": "<p>The available classes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.eggs",
            "description": "<p>All available eggs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.timeTravelStable",
            "description": "<p>The animals available in the Time Traveler's stable, separated into pets and mounts.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.hatchingPotions",
            "description": "<p>All the hatching potions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.petInfo",
            "description": "<p>All the pets with extra info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.mountInfo",
            "description": "<p>All the mounts with extra info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.food",
            "description": "<p>All the food.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.userCanOwnQuestCategories",
            "description": "<p>The types of quests that a user can own.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.quests",
            "description": "<p>Data about the quests.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.appearances",
            "description": "<p>Data about the apperance properties.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.appearances.hair",
            "description": "<p>Data about available hair options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.appearances.shirt",
            "description": "<p>Data about available shirt options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.appearances.size",
            "description": "<p>Data about available body size options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.appearances.skin",
            "description": "<p>Data about available skin options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.appearances.chair",
            "description": "<p>Data about available chair options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.appearances.background",
            "description": "<p>Data about available background options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.backgrounds",
            "description": "<p>Data about the background sets.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.subscriptionBlocks",
            "description": "<p>Data about the various subscirption blocks.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/content.js",
    "groupTitle": "Content"
  },
  {
    "type": "post",
    "url": "/api/v3/coupons/generate/:event",
    "title": "Generate coupons for an event",
    "name": "GenerateCoupons",
    "group": "Coupon",
    "permission": [
      {
        "name": "sudo"
      }
    ],
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "String",
            "allowedValues": [
              "wondercon",
              "google_6mo"
            ],
            "optional": false,
            "field": "event",
            "description": "<p>The event for which the coupon should be generated</p>"
          }
        ],
        "Query Parameters": [
          {
            "group": "Query",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>The number of coupon codes to generate</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Generated coupons</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "CouponValidationError",
            "description": "<p>The request was missing the count query parameter or used an invalid event.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/coupon.js",
    "groupTitle": "Coupon"
  },
  {
    "type": "get",
    "url": "/api/v3/coupons",
    "title": "Get coupons",
    "name": "GetCoupons",
    "group": "Coupon",
    "permission": [
      {
        "name": "sudo"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Coupons",
            "description": "<p>in CSV format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "code,event,date,user",
          "content": "code,event,date,user\nGJG4-WEA4-QX3P,wondercon,1476929528704,user-uuid\nTT32-EYQA-JPBT,wondercon,1476929528705,\nV3EK-GE8M-LMJ4,wondercon,1476929528705,another-user-uuid",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/coupon.js",
    "groupTitle": "Coupon"
  },
  {
    "type": "post",
    "url": "/api/v3/coupons/enter/:code",
    "title": "Redeem a coupon code",
    "name": "RedeemCouponCode",
    "group": "Coupon",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The coupon code to apply</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>User object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/coupon.js",
    "groupTitle": "Coupon"
  },
  {
    "type": "post",
    "url": "/api/v3/coupons/validate/:code",
    "title": "Validate a coupon code",
    "name": "ValidateCoupon",
    "group": "Coupon",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The coupon code to validate</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.valid",
            "description": "<p>True or False</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/coupon.js",
    "groupTitle": "Coupon"
  },
  {
    "type": "post",
    "url": "/api/v3/cron",
    "title": "Runs cron",
    "name": "Cron",
    "group": "Cron",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/cron.js",
    "groupTitle": "Cron"
  },
  {
    "type": "get",
    "url": "/export/avatar-:uuid.html",
    "title": "Render a user avatar as an HTML page",
    "name": "ExportUserAvatarHtml",
    "group": "DataExport",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>The User ID of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTML",
            "optional": false,
            "field": "File",
            "description": "<p>An html page rendering the user's avatar.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/top-level/dataexport.js",
    "groupTitle": "Data Export",
    "groupDescription": "<p>These routes allow you to download backups of your data.</p> <p><strong>Note:</strong> They are intented to be used on the website only and as such are part of the private API and may change at any time.</p>",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/export/avatar-:uuid.png",
    "title": "Render a user avatar as a PNG file",
    "name": "ExportUserAvatarPng",
    "group": "DataExport",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>The User ID of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "PNG",
            "optional": false,
            "field": "File",
            "description": "<p>A png file of the user's avatar.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/top-level/dataexport.js",
    "groupTitle": "Data Export",
    "groupDescription": "<p>These routes allow you to download backups of your data.</p> <p><strong>Note:</strong> They are intented to be used on the website only and as such are part of the private API and may change at any time.</p>"
  },
  {
    "type": "get",
    "url": "/export/userdata.json",
    "title": "Export user data in JSON format",
    "name": "ExportUserDataJson",
    "group": "DataExport",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "File",
            "description": "<p>A JSON file of the user object and tasks.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/top-level/dataexport.js",
    "groupTitle": "Data Export",
    "groupDescription": "<p>These routes allow you to download backups of your data.</p> <p><strong>Note:</strong> They are intented to be used on the website only and as such are part of the private API and may change at any time.</p>"
  },
  {
    "type": "get",
    "url": "/export/userdata.xml",
    "title": "Export user data in XML format",
    "name": "ExportUserDataXml",
    "group": "DataExport",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "XML",
            "optional": false,
            "field": "File",
            "description": "<p>An xml file of the user object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/top-level/dataexport.js",
    "groupTitle": "Data Export",
    "groupDescription": "<p>These routes allow you to download backups of your data.</p> <p><strong>Note:</strong> They are intented to be used on the website only and as such are part of the private API and may change at any time.</p>"
  },
  {
    "type": "get",
    "url": "/export/history.csv",
    "title": "Export user tasks history in CSV format",
    "description": "<p>History is only available for habits and dailies so todos and rewards won't be included. Can only be used on <a href=\"https://habitica.com\">https://habitica.com</a>.</p>",
    "name": "ExportUserHistory",
    "group": "DataExport",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "CSV",
            "optional": false,
            "field": "File",
            "description": "<p>A csv file of your task history.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "history.csv",
          "content": "Task Name,Task ID,Task Type,Date,Value\nBe Awesome,e826ddfa-dc2e-445f-a06c-64d3881982ea,habit,2016-06-02 13:26:05,1\nBe Awesome,e826ddfa-dc2e-445f-a06c-64d3881982ea,habit,2016-06-03 05:06:55,1.026657310999762\n...",
          "type": "csv"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/top-level/dataexport.js",
    "groupTitle": "Data Export",
    "groupDescription": "<p>These routes allow you to download backups of your data.</p> <p><strong>Note:</strong> They are intented to be used on the website only and as such are part of the private API and may change at any time.</p>"
  },
  {
    "type": "get",
    "url": "/export/inbox.html",
    "title": "Export user private messages as HTML document",
    "name": "ExportUserPrivateMessages",
    "group": "DataExport",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTML",
            "optional": false,
            "field": "File",
            "description": "<p>An html page of the user's private messages.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/top-level/dataexport.js",
    "groupTitle": "Data Export",
    "groupDescription": "<p>These routes allow you to download backups of your data.</p> <p><strong>Note:</strong> They are intented to be used on the website only and as such are part of the private API and may change at any time.</p>"
  },
  {
    "type": "post",
    "url": "/api/v3/debug/add-hourglass",
    "title": "Add Hourglass to the current user",
    "name": "AddHourglass",
    "group": "Development",
    "permission": [
      {
        "name": "Developers",
        "title": "Local Development",
        "description": "<p>This route only exists when developing Habitica in non-production environment.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/debug.js",
    "groupTitle": "Development",
    "groupDescription": "<p>These routes only exist while Habitica is in development mode. (Such as running a local instance on your computer)</p>"
  },
  {
    "type": "post",
    "url": "/api/v3/debug/add-ten-gems",
    "title": "Add ten gems to the current user",
    "name": "AddTenGems",
    "group": "Development",
    "permission": [
      {
        "name": "Developers",
        "title": "Local Development",
        "description": "<p>This route only exists when developing Habitica in non-production environment.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/debug.js",
    "groupTitle": "Development",
    "groupDescription": "<p>These routes only exist while Habitica is in development mode. (Such as running a local instance on your computer)</p>"
  },
  {
    "type": "post",
    "url": "/api/v3/debug/modify-inventory",
    "title": "Manipulate user's inventory",
    "name": "modifyInventory",
    "group": "Development",
    "permission": [
      {
        "name": "Developers",
        "title": "Local Development",
        "description": "<p>This route only exists when developing Habitica in non-production environment.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "gear",
            "description": "<p>Object to replace user's <code><a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/user/schema.js#L243\">gear.owned</a></code> object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "special",
            "description": "<p>Object to replace user's <code><a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/user/schema.js#272\">special</a></code> object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "pets",
            "description": "<p>Object to replace user's <code><a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/user/schema.js#296\">pets</a></code> object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "mounts",
            "description": "<p>Object to replace user's <code><a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/user/schema.js#329\">mounts</a></code> object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "eggs",
            "description": "<p>Object to replace user's <code><a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/user/schema.js#310\">eggs</a></code> object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "hatchingPotions",
            "description": "<p>Object to replace user's <code><a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/user/schema.js#316\">hatchingPotions</a></code> object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "food",
            "description": "<p>Object to replace user's <code><a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/user/schema.js#322\">food</a></code> object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "quests",
            "description": "<p>Object to replace user's <code><a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/user/schema.js#344\">quests</a></code> object.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/debug.js",
    "groupTitle": "Development",
    "groupDescription": "<p>These routes only exist while Habitica is in development mode. (Such as running a local instance on your computer)</p>"
  },
  {
    "type": "post",
    "url": "/api/v3/debug/quest-progress",
    "title": "Artificially accelerate quest progress",
    "name": "questProgress",
    "group": "Development",
    "permission": [
      {
        "name": "Developers",
        "title": "Local Development",
        "description": "<p>This route only exists when developing Habitica in non-production environment.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/debug.js",
    "groupTitle": "Development",
    "groupDescription": "<p>These routes only exist while Habitica is in development mode. (Such as running a local instance on your computer)</p>"
  },
  {
    "type": "post",
    "url": "/api/v3/debug/make-admin",
    "title": "Sets contributor.admin to true",
    "name": "setCron",
    "group": "Development",
    "permission": [
      {
        "name": "Developers",
        "title": "Local Development",
        "description": "<p>This route only exists when developing Habitica in non-production environment.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/debug.js",
    "groupTitle": "Development",
    "groupDescription": "<p>These routes only exist while Habitica is in development mode. (Such as running a local instance on your computer)</p>"
  },
  {
    "type": "post",
    "url": "/api/v3/debug/set-cron",
    "title": "Set lastCron for user",
    "name": "setCron",
    "group": "Development",
    "permission": [
      {
        "name": "Developers",
        "title": "Local Development",
        "description": "<p>This route only exists when developing Habitica in non-production environment.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/debug.js",
    "groupTitle": "Development",
    "groupDescription": "<p>These routes only exist while Habitica is in development mode. (Such as running a local instance on your computer)</p>"
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/add-manager",
    "title": "Add a manager to a group",
    "name": "AddGroupManager",
    "group": "Group",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "party:",
          "content": "/api/v3/groups/party/add-manager",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "managerId",
            "description": "<p>req.body.managerId is required</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A groupId is required</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/groups.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/api/v3/groups",
    "title": "Create group",
    "name": "CreateGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Body Parameters": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"guild\"",
              "\"party\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Type of group (guild or party)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"private\"",
              "\"public\""
            ],
            "optional": false,
            "field": "privacy",
            "description": "<p>Privacy of group (party MUST be private)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Private Guild:",
          "content": "{\n  \"name\": \"The Best Guild\",\n  \"type\": \"guild\",\n  \"privacy\": \"private\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageInsufficientGems",
            "description": "<p>User does not have enough gems (4)</p>"
          },
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "partyMustbePrivate",
            "description": "<p>Party must have privacy set to private</p>"
          },
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageGroupAlreadyInParty",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The created group (See <a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/group.js\" target=\"_blank\">/website/server/models/group.js</a>)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Private Guild:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"The Best Guild\",\n  \"leader\": {\n    \"_id\": \"authenticated-user-id\",\n    \"profile\": {authenticated user's profile}\n  },\n  \"type\": \"guild\",\n  \"privacy\": \"private\",\n  \"chat\": [],\n  \"leaderOnly\": {\n    \"challenges\": false\n  },\n  memberCount: 1,\n  challengeCount: 0,\n  balance: 1,\n  logo: \"\",\n  leaderMessage: \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/groups.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/api/v3/groups/create-plan",
    "title": "Create a Group and then redirect to the correct payment",
    "name": "CreateGroupPlan",
    "group": "Group",
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The created group</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/groups.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/api/v3/groups/:groupId",
    "title": "Get group",
    "name": "GetGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Tavern:",
          "content": "/api/v3/groups/habitrpg",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The group object (See <a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/group.js\" target=\"_blank\">/website/server/models/group.js</a>)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Tavern:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"Tavern\",\n  ...\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/groups.js",
    "groupTitle": "Group",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A groupId is required</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/groups",
    "title": "Get groups for a user",
    "name": "GetGroups",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of groups to retrieve. Must be a query string representing a list of values like 'tavern,party'. Possible values are party, guilds, privateGuilds, publicGuilds, tavern</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": true,
            "field": "paginate",
            "description": "<p>Public guilds support pagination. When true guilds are returned in groups of 30</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>When pagination is enabled for public guilds this parameter can be used to specify the page number (the initial page is number 0 and not required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Private Guilds, Tavern:",
          "content": "{\n  \"type\": \"privateGuilds,tavern\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "groupTypesRequired",
            "description": "<p>Group types are required</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "guildsPaginateBooleanString",
            "description": "<p>Paginate query parameter must be a boolean (true or false)</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "guildsPageInteger",
            "description": "<p>Page query parameter must be a positive integer</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "guildsOnlyPaginate",
            "description": "<p>Only public guilds support pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>An array of the requested groups (See <a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/group.js\" target=\"_blank\">/website/server/models/group.js</a>)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Private Guilds, Tavern:",
          "content": "HTTP/1.1 200 OK\n[\n  {guilds}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/groups.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/invite",
    "title": "Invite users to a group",
    "name": "InviteToGroup",
    "group": "Group",
    "description": "<p>You can provide both <code>emails</code> and <code>uuids</code>, or just one. You must provide at least one.</p>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          }
        ],
        "Body Parameters": [
          {
            "group": "Body",
            "type": "Object[]",
            "optional": true,
            "field": "emails",
            "description": "<p>An array of objects, each representing one email address to invite</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "emails.email",
            "description": "<p>The email address of the user being invited.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "emails.name",
            "description": "<p>The name of the user being invited.</p>"
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": true,
            "field": "uuids",
            "description": "<p>An array of uuids to invite</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Emails",
          "content": "{\n  \"emails\": [\n    {\"email\": \"user-1@example.com\"},\n    {\"name\": \"User2\", \"email\": \"user-2@example.com\"}\n  ]\n}",
          "type": "json"
        },
        {
          "title": "User Ids",
          "content": "{\n  \"uuids\": [\"user-id-of-existing-user\", \"user-id-of-another-existing-user\"]\n}",
          "type": "json"
        },
        {
          "title": "User Ids and Emails",
          "content": "{\n  \"emails\": [\n      {\"email\": \"user-1@example.com\"},\n      {\"email\": \"user-2@example.com\"}\n  ],\n  \"uuids\": [\"user-id-of-existing-user\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>The invites</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data[0]",
            "description": "<p>If the invitation was a user id, you'll receive back an object. You'll recieve one Object for each succesful user id invite.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data[1]",
            "description": "<p>If the invitation was an email, you'll receive back the email. You'll recieve one String for each successful email invite.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response with Emails",
          "content": "{\n  \"data\": [\n     \"user-1@example.com\",\n     \"user-2@exmaple.com\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Successful Response with User Id",
          "content": "{\n  \"data\": [\n    { id: 'the-id-of-the-invited-user', name: 'The group name', inviter: 'your-user-id' }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Successful Response with User Ids and Emails",
          "content": "{\n  \"data\": [\n    \"user-1@example.com\",\n    { id: 'the-id-of-the-invited-user', name: 'The group name', inviter: 'your-user-id' },\n    \"user-2@exmaple.com\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "NoEmailProvided",
            "description": "<p>An email address was not provided in the <code>emails</code> body param <code>Array</code>.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "UuidOrEmailOnly",
            "description": "<p>The <code>emails</code> and <code>uuids</code> params were both missing and/or a key other than <code>emails</code> or <code>uuids</code> was provided in the body param.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "CannotInviteSelf",
            "description": "<p>User id or email of invitee matches that of the inviter.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "MustBeArray",
            "description": "<p>The <code>uuids</code> or <code>emails</code> body param was not an array.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "TooManyInvites",
            "description": "<p>A max of 100 invites (combined emails and user ids) can be sent out at a time.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "ExceedsMembersLimit",
            "description": "<p>A max of 30 members can join a party.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "GroupBodyInvalid",
            "description": "<p>A parameter in the group body was invalid.</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "UserAlreadyInvited",
            "description": "<p>The user has already been invited to the group.</p>"
          },
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "UserAlreadyInGroup",
            "description": "<p>The user is already a member of the group.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "PartyNotFound",
            "description": "<p>The user's party could not be found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/groups.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/join",
    "title": "Join a group",
    "name": "JoinGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Tavern:",
          "content": "/api/v3/groups/habitrpg/join",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The joined group (See <a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/group.js\" target=\"_blank\">/website/server/models/group.js</a>)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Tavern:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"Tavern\",\n  ...\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/groups.js",
    "groupTitle": "Group",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A groupId is required</p>"
          },
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageGroupRequiresInvite",
            "description": "<p>Group requires an invitation to join (e.g. private group, party)</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/leave",
    "title": "Leave a group",
    "name": "LeaveGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          }
        ],
        "Query Parameters": [
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"remove-all\"",
              "\"keep-all\""
            ],
            "optional": false,
            "field": "keep",
            "defaultValue": "keep-all",
            "description": "<p>Whether or not to keep challenge tasks belonging to the group being left.</p>"
          }
        ],
        "Body Parameters": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"remain-in-challenges\"",
              "\"leave-challenges\""
            ],
            "optional": true,
            "field": "keepChallenges",
            "defaultValue": "leave-challenges",
            "description": "<p>Whether or not to remain in the challenges of the group being left.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Leave Party:",
          "content": "/api/v3/groups/party/leave\n{\n  \"keepChallenges\": \"remain-in-challenges\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "keepOrRemoveAll",
            "description": "<p>&quot;keep&quot; parameter is not &quot;remove-all&quot; or &quot;keep-all&quot;</p>"
          },
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "questLeaderCannotLeaveGroup",
            "description": "<p>User could not leave party because they are the owner of a quest currently running</p>"
          },
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "cannotLeaveWhileActiveQuest",
            "description": "<p>User could not leave party due to being in a quest</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A groupId is required</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/groups.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/reject",
    "title": "Reject a group invitation",
    "name": "RejectGroupInvite",
    "group": "Group",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "party:",
          "content": "/api/v3/groups/party/reject",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/groups.js",
    "groupTitle": "Group",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A groupId is required</p>"
          },
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageGroupRequiresInvite",
            "description": "<p>Group requires an invitation to join (e.g. private group, party)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/remove-manager",
    "title": "Remove a manager from a group",
    "name": "RemoveGroupManager",
    "group": "Group",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "party:",
          "content": "/api/v3/groups/party/add-manager",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>The group</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "managerId",
            "description": "<p>req.body.managerId is required</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A groupId is required</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/groups.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/removeMember/:memberId",
    "title": "Remove a member from a group",
    "name": "RemoveGroupMember",
    "group": "Group",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          },
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "memberId",
            "description": "<p>The _id of the member to remove</p>"
          }
        ],
        "Query Parameters": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Query parameter - The message to send to the removed members</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Remove member from party:",
          "content": "/api/v3/groups/party/removeMember/[User's ID]?message=Bye",
          "type": "URL"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "userIdrequired",
            "description": "<p>&quot;memberId&quot; cannot be empty or not a UUID</p>"
          },
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "onlyLeaderCanRemoveMember",
            "description": "<p>Only the group leader can remove members</p>"
          },
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "memberCannotRemoveYourself",
            "description": "<p>Group leader cannot remove themselves</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A groupId is required</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "groupMemberNotFound",
            "description": "<p>Group member was not found</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "GroupLeader, Admin"
      }
    ],
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/groups.js",
    "groupTitle": "Group"
  },
  {
    "type": "put",
    "url": "/api/v3/groups/:groupId",
    "title": "Update group",
    "name": "UpdateGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id ('party' for the user party and 'habitrpg' for tavern are accepted)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Tavern:",
          "content": "/api/v3/groups/habitrpg",
          "type": "String"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageGroupOnlyLeaderCanUpdate",
            "description": "<p>Only the group's leader can update the party</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "groupIdRequired",
            "description": "<p>A groupId is required</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated group (See <a href=\"https://github.com/HabitRPG/habitica/blob/develop/website/server/models/group.js\" target=\"_blank\">/website/server/models/group.js</a>)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Tavern:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"Tavern\",\n  ...\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "GroupLeader, Admin"
      }
    ],
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/groups.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/api/v3/hall/heroes/:heroId",
    "title": "Get any user (\"hero\") given the UUID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "heroId",
            "description": "<p>user ID</p>"
          }
        ]
      }
    },
    "name": "GetHero",
    "group": "Hall",
    "permission": [
      {
        "name": "Admin",
        "title": "Moderators",
        "description": "<p>Contributors of tier 8 or higher can use this route.</p>"
      }
    ],
    "description": "<p>Returns the profile of the given user</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The user object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/hall.js",
    "groupTitle": "Hall",
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NoAuthHeaders",
            "description": "<p>Missing authentication headers</p>"
          },
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NoAccount",
            "description": "<p>There is no account that uses those credentials</p>"
          },
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NotAdmin",
            "description": "<p>User is not an admin</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "NoUser",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Missing authentication headers",
          "content": "{\n  \"success\": false,\n  \"error\": \"NotAuthorized\",\n  \"message\": \"Missing authentication headers.\"\n}",
          "type": "json"
        },
        {
          "title": "No account",
          "content": "{\n  \"success\": false,\n  \"error\": \"NotAuthorized\",\n  \"message\": \"There is no account that uses those credentials.\"\n}",
          "type": "json"
        },
        {
          "title": "No user",
          "content": "{\n  \"success\": false,\n  \"error\": \"NotFound\",\n  \"message\": \"User with id \\\"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\\\" not found.\"\n}",
          "type": "json"
        },
        {
          "title": "No admin access",
          "content": "{\n  \"success\": false,\n  \"error\": \"NotAuthorized\",\n  \"message\": \"You don't have admin access.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v3/hall/heroes",
    "title": "Get all Heroes",
    "name": "GetHeroes",
    "group": "Hall",
    "description": "<p>Returns an array of objects containing the heroes who have contributed for Habitica. The array is sorted by the contribution level in descending order.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "heroes",
            "description": "<p>An array of heroes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "{\n  \"success\": true,\n  \"data\": [\n   {\n     \"_id\": \"e6e01d2a-c2fa-4b9f-9c0f-7865b777e7b5\",\n     \"profile\": {\n       \"name\": \"test2\"\n     },\n     \"contributor\": {\n       \"admin\": false,\n       \"level\": 2,\n       \"text\": \"Linguist\"\n     },\n     \"backer\": {}\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/hall.js",
    "groupTitle": "Hall",
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NoAuthHeaders",
            "description": "<p>Missing authentication headers</p>"
          },
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NoAccount",
            "description": "<p>There is no account that uses those credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Missing authentication headers",
          "content": "{\n  \"success\": false,\n  \"error\": \"NotAuthorized\",\n  \"message\": \"Missing authentication headers.\"\n}",
          "type": "json"
        },
        {
          "title": "No account",
          "content": "{\n  \"success\": false,\n  \"error\": \"NotAuthorized\",\n  \"message\": \"There is no account that uses those credentials.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v3/hall/patrons",
    "title": "Get all patrons",
    "description": "<p>Returns an array of objects containing the patrons who backed Habitica's original kickstarter. The array is sorted by the backer tier in descending order. By default, only the first 50 patrons are returned. More can be accessed by passing ?page=n</p>",
    "name": "GetPatrons",
    "group": "Hall",
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>The result page.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>An array of patrons</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response",
          "content": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"_id\": \"3adb52a9-0dfb-4752-81f2-a62d911d1bf5\",\n      \"profile\": {\n        \"name\": \"mattboch\"\n      },\n      \"contributor\": {},\n      \"backer\": {\n        \"tier\": 800,\n        \"npc\": \"Beast Master\"\n      }\n    },\n    {\n      \"_id\": \"9da65443-ed43-4c21-804f-d260c1361596\",\n      \"profile\": {\n        \"name\": \"ʎǝlᴉɐq s,┴I\"\n      },\n      \"contributor\": {\n        \"text\": \"Pollen Purveyor\",\n        \"admin\": true,\n        \"level\": 8\n      },\n      \"backer\": {\n        \"npc\": \"Town Crier\",\n        \"tier\": 800,\n        \"tokensApplied\": true\n      }\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/hall.js",
    "groupTitle": "Hall",
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NoAuthHeaders",
            "description": "<p>Missing authentication headers</p>"
          },
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NoAccount",
            "description": "<p>There is no account that uses those credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Missing authentication headers",
          "content": "{\n  \"success\": false,\n  \"error\": \"NotAuthorized\",\n  \"message\": \"Missing authentication headers.\"\n}",
          "type": "json"
        },
        {
          "title": "No account",
          "content": "{\n  \"success\": false,\n  \"error\": \"NotAuthorized\",\n  \"message\": \"There is no account that uses those credentials.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v3/hall/heroes/:heroId",
    "title": "Update any user (\"hero\")",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "heroId",
            "description": "<p>user ID</p>"
          }
        ]
      }
    },
    "name": "UpdateHero",
    "group": "Hall",
    "permission": [
      {
        "name": "Admin",
        "title": "Moderators",
        "description": "<p>Contributors of tier 8 or higher can use this route.</p>"
      }
    ],
    "description": "<p>Update user's gem balance, contributions &amp; contribution tier and admin status. Grant items, block / unblock user's account and revoke / unrevoke chat privileges.</p>",
    "examples": [
      {
        "title": "Example Body:",
        "content": "{\n   \"balance\": 1000,\n   \"auth\": {\"blocked\": false},\n   \"flags\": {\"chatRevoked\": true},\n   \"purchased\": {\"ads\": true},\n   \"contributor\": {\n     \"admin\": true,\n     \"contributions\": \"Improving API documentation\",\n     \"level\": 5,\n     \"text\": \"Scribe, Blacksmith\"\n   },\n   \"itemPath\": \"items.pets.BearCub-Skeleton\",\n   \"itemVal\": 1\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated user object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/hall.js",
    "groupTitle": "Hall",
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NoAuthHeaders",
            "description": "<p>Missing authentication headers</p>"
          },
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NoAccount",
            "description": "<p>There is no account that uses those credentials</p>"
          },
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NotAdmin",
            "description": "<p>User is not an admin</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "NoUser",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Missing authentication headers",
          "content": "{\n  \"success\": false,\n  \"error\": \"NotAuthorized\",\n  \"message\": \"Missing authentication headers.\"\n}",
          "type": "json"
        },
        {
          "title": "No account",
          "content": "{\n  \"success\": false,\n  \"error\": \"NotAuthorized\",\n  \"message\": \"There is no account that uses those credentials.\"\n}",
          "type": "json"
        },
        {
          "title": "No user",
          "content": "{\n  \"success\": false,\n  \"error\": \"NotFound\",\n  \"message\": \"User with id \\\"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\\\" not found.\"\n}",
          "type": "json"
        },
        {
          "title": "No admin access",
          "content": "{\n  \"success\": false,\n  \"error\": \"NotAuthorized\",\n  \"message\": \"You don't have admin access.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v3/challenges/:challengeId/members/:memberId",
    "title": "Get a challenge member progress",
    "name": "GetChallengeMemberProgress",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "challengeId",
            "description": "<p>The challenge _id</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "member",
            "description": "<p>The member _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Return an object with member _id, profile.name and a tasks object with the challenge tasks for the member</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/members.js",
    "groupTitle": "Member",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/groups/:groupId/invites",
    "title": "Get invites for a group",
    "description": "<p>With a limit of 30 member per request. To get all invites run requests against this routes (updating the lastId query parameter) until you get less than 30 results.</p>",
    "name": "GetInvitesForGroup",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group id</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "lastId",
            "description": "<p>Query parameter to specify the last invite returned in a previous request to this route and get the next batch of results</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>An array of invites, sorted by _id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/members.js",
    "groupTitle": "Member",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/members/:memberId",
    "title": "Get a member profile",
    "name": "GetMember",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "memberId",
            "description": "<p>The member's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The member object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/members.js",
    "groupTitle": "Member",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/members/:memberId/achievements",
    "title": "Get member achievements object",
    "name": "GetMemberAchievements",
    "group": "Member",
    "description": "<p>Get a list of achievements of the requested member, grouped by basic / seasonal / special.</p>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "memberId",
            "description": "<p>The member's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The achievements object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.basic",
            "description": "<p>The basic achievements object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.seasonal",
            "description": "<p>The seasonal achievements object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.special",
            "description": "<p>The special achievements object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.",
            "description": "<p>*.label The label for that category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  basic: {\n    label: \"Basic\",\n    achievements: {\n      streak: {\n        title: \"0 Streak Achievements\",\n        text: \"Has performed 0 21-day streaks on Dailies\",\n        icon: \"achievement-thermometer\",\n        earned: false,\n        value: 0,\n        index: 60,\n        optionalCount: 0\n      },\n      perfect: {\n        title: \"5 Perfect Days\",\n        text: \"Completed all active Dailies on 5 days. With this achievement you get a +level/2 buff to all attributes for the next day. Levels greater than 100 don't have any additional effects on buffs.\",\n        icon: \"achievement-perfect\",\n        earned: true,\n        value: 5,\n        index: 61,\n        optionalCount: 5\n      }\n    }\n  },\n  seasonal: {\n    label: \"Seasonal\",\n    achievements: {\n      habiticaDays: {\n        title: \"Habitica Naming Day\",\n        text: \"Celebrated 0 Naming Days! Thanks for being a fantastic user.\",\n        icon: \"achievement-habiticaDay\",\n        earned: false,\n        value: 0,\n        index: 72,\n        optionalCount: 0\n      }\n    }\n  },\n  special: {\n    label: \"Special\",\n    achievements: {\n      habitSurveys: {\n        title: \"Helped Habitica Grow\",\n        text: \"Helped Habitica grow on 0 occasions, either by filling out a survey or helping with a major testing effort. Thank you!\",\n        icon: \"achievement-tree\",\n        earned: false,\n        value: 0,\n        index: 88,\n        optionalCount: 0\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "MemberIdRequired",
            "description": "<p>The <code>id</code> param is required and must be a valid <code>UUID</code></p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserWithIdNotFound",
            "description": "<p>The <code>id</code> param did not belong to an existing member</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/members.js",
    "groupTitle": "Member"
  },
  {
    "type": "get",
    "url": "/api/v3/challenges/:challengeId/members",
    "title": "Get members for a challenge",
    "description": "<p>With a limit of 30 member per request. To get all members run requests against this routes (updating the lastId query parameter) until you get less than 30 results. BETA You can also use ?includeAllMembers=true. This option is currently in BETA and may be removed in future. Its use is discouraged and its performaces are not optimized especially for large challenges.</p>",
    "name": "GetMembersForChallenge",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "challengeId",
            "description": "<p>The challenge id</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "lastId",
            "description": "<p>Query parameter to specify the last member returned in a previous request to this route and get the next batch of results</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "includeAllMembers",
            "description": "<p>BETA Query parameter - If 'true' all challenge members are returned</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>An array of members, sorted by _id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/members.js",
    "groupTitle": "Member",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/groups/:groupId/members",
    "title": "Get members for a group",
    "description": "<p>With a limit of 30 member per request. To get all members run requests against this routes (updating the lastId query parameter) until you get less than 30 results.</p>",
    "name": "GetMembersForGroup",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group id</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "lastId",
            "description": "<p>Query parameter to specify the last member returned in a previous request to this route and get the next batch of results</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "includeAllPublicFields",
            "description": "<p>Query parameter available only when fetching a party. If === <code>true</code> then all public fields for members will be returned (like when making a request for a single member)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>An array of members, sorted by _id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/members.js",
    "groupTitle": "Member",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/members/:toUserId/objections/:interaction",
    "title": "Get any objections that would occur if the given interaction was attempted - BETA",
    "version": "3.0.0",
    "name": "GetObjectionsToInteraction",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "toUserId",
            "description": "<p>The user to interact with</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"send-private-message\"",
              "\"transfer-gems\""
            ],
            "optional": false,
            "field": "interaction",
            "description": "<p>Name of the interaction to query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Return an array of objections, if the interaction would be blocked; otherwise an empty array</p>"
          }
        ]
      }
    },
    "filename": "website/server/controllers/api-v3/members.js",
    "groupTitle": "Member"
  },
  {
    "type": "posts",
    "url": "/api/v3/members/send-private-message",
    "title": "Send a private message to a member",
    "name": "SendPrivateMessage",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Body parameter - The message</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "toUserId",
            "description": "<p>Body parameter - The user to contact</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/members.js",
    "groupTitle": "Member",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "posts",
    "url": "/api/v3/members/transfer-gems",
    "title": "Send a gem gift to a member",
    "name": "TransferGems",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Body parameter The message</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "toUserId",
            "description": "<p>Body parameter The toUser _id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "gemAmount",
            "description": "<p>Body parameter The number of gems to send</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/members.js",
    "groupTitle": "Member",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/models/:model/paths",
    "title": "Get all paths for the specified model",
    "description": "<p>Doesn't require authentication</p>",
    "name": "GetUserModelPaths",
    "group": "Meta",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "String",
            "allowedValues": [
              "\"user\"",
              "\"group\"",
              "\"challenge\"",
              "\"tag\"",
              "\"habit\"",
              "\"daily\"",
              "\"todo\"",
              "\"reward\""
            ],
            "optional": false,
            "field": "model",
            "description": "<p>The name of the model</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Tag",
        "content": "curl https://habitica.com/api/v3/models/tag/paths",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>A key-value object made of fieldPath: fieldType (like {'field.nested': Boolean})</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Tag",
          "content": "{\n  \"success\":true,\n  \"data\": {\n    \"id\":\"String\",\n    \"name\":\"String\",\n    \"challenge\":\"String\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "badRequest",
            "optional": false,
            "field": "modelNotFound",
            "description": "<p>The model specified was not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/modelsPaths.js",
    "groupTitle": "Meta"
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/quests/abort",
    "title": "Abort the current quest",
    "name": "AbortQuest",
    "group": "Quest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id (or 'party')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Quest Object</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "QuestLeader",
        "title": "Quest Leader",
        "description": "<p>The quest leader can use this route.</p>"
      },
      {
        "name": "GroupLeader",
        "title": "Group Leader",
        "description": "<p>The group leader can use this route.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/quests.js",
    "groupTitle": "Quest",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "QuestNotFound",
            "description": "<p>The specified quest could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/quests/accept",
    "title": "Accept a pending quest",
    "name": "AcceptQuest",
    "group": "Quest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id (or 'party')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Quest Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/quests.js",
    "groupTitle": "Quest",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "QuestNotFound",
            "description": "<p>The specified quest could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/quests/cancel",
    "title": "Cancel a quest that is not active",
    "name": "CancelQuest",
    "group": "Quest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id (or 'party')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Quest Object</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "QuestLeader",
        "title": "Quest Leader",
        "description": "<p>The quest leader can use this route.</p>"
      },
      {
        "name": "GroupLeader",
        "title": "Group Leader",
        "description": "<p>The group leader can use this route.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/quests.js",
    "groupTitle": "Quest",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "QuestNotFound",
            "description": "<p>The specified quest could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/quests/force-start",
    "title": "Force-start a pending quest",
    "name": "ForceQuestStart",
    "group": "Quest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id (or 'party')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Quest Object</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "QuestLeader",
        "title": "Quest Leader",
        "description": "<p>The quest leader can use this route.</p>"
      },
      {
        "name": "GroupLeader",
        "title": "Group Leader",
        "description": "<p>The group leader can use this route.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/quests.js",
    "groupTitle": "Quest",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "QuestNotFound",
            "description": "<p>The specified quest could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/quests/invite/:questKey",
    "title": "Invite users to a quest",
    "name": "InviteToQuest",
    "group": "Quest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id (or 'party')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questKey",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Quest object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/quests.js",
    "groupTitle": "Quest",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "QuestNotFound",
            "description": "<p>The specified quest could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/quests/leave",
    "title": "Leave the active quest",
    "name": "LeaveQuest",
    "group": "Quest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id (or 'party')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Quest Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/quests.js",
    "groupTitle": "Quest",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "QuestNotFound",
            "description": "<p>The specified quest could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/groups/:groupId/quests/reject",
    "title": "Reject a quest",
    "name": "RejectQuest",
    "group": "Quest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group _id (or 'party')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Quest Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/quests.js",
    "groupTitle": "Quest",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The specified group could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "QuestNotFound",
            "description": "<p>The specified quest could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/status",
    "title": "Get Habitica's API status",
    "name": "GetStatus",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.status",
            "description": "<p>'up' if everything is ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Server is Up",
          "content": "{\n  'status': 'up',\n}",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/status.js",
    "groupTitle": "Status"
  },
  {
    "type": "post",
    "url": "/api/v3/tags",
    "title": "Create a new tag",
    "name": "CreateTag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the tag to be added.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example body:",
          "content": "{\"name\":\"practicetag\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The newly created tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example return:",
          "content": "{\"success\":true,\"data\":{\"name\":\"practicetag\",\"id\":\"8bc0afbf-ab8e-49a4-982d-67a40557ed1a\"},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tags.js",
    "groupTitle": "Tag"
  },
  {
    "type": "delete",
    "url": "/api/v3/tags/:tagId",
    "title": "Delete a user tag given its id",
    "name": "DeleteTag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "tagId",
            "description": "<p>The tag _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example return:",
          "content": "{\"success\":true,\"data\":{},\"notifications\":[]}",
          "type": "jsom"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tags.js",
    "groupTitle": "Tag",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "InvalidRequestParameters",
            "description": "<p>&quot;tagId&quot; must be a valid UUID corresponding to a tag belonging to the user.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TagNotFound",
            "description": "<p>The specified tag could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/tags/:tagId",
    "title": "Get a tag given its id",
    "name": "GetTag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "tagId",
            "description": "<p>The tag _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The tag object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example return:",
          "content": "{\"success\":true,\"data\":{\"name\":\"practicetag\",\"id\":\"8bc0afbf-ab8e-49a4-982d-67a40557ed1a\"},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tags.js",
    "groupTitle": "Tag",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "InvalidRequestParameters",
            "description": "<p>&quot;tagId&quot; must be a valid UUID corresponding to a tag belonging to the user.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TagNotFound",
            "description": "<p>The specified tag could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/tags",
    "title": "Get a user's tags",
    "name": "GetTags",
    "group": "Tag",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>An array of tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example return:",
          "content": "{\"success\":true,\"data\":[{\"name\":\"Work\",\"id\":\"3d5d324d-a042-4d5f-872e-0553e228553e\"},{\"name\":\"apitester\",\"challenge\":\"true\",\"id\":\"f23c12f2-5830-4f15-9c36-e17fd729a812\"},{\"name\":\"practicetag\",\"id\":\"8bc0afbf-ab8e-49a4-982d-67a40557ed1a\"}],\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tags.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/api/v3/reorder-tags",
    "title": "Reorder a tag",
    "name": "ReorderTags",
    "group": "Tag",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "UUID",
            "optional": false,
            "field": "tagId",
            "description": "<p>Id of the tag to move</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>Position the tag is moving to</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example request:",
          "content": "{\"tagId\":\"c6855fae-ca15-48af-a88b-86d0c65ead47\",\"to\":0}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example return:",
          "content": "{\"success\":true,\"data\":{},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tags.js",
    "groupTitle": "Tag",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TagNotFound",
            "description": "<p>The specified tag could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/api/v3/tags/:tagId",
    "title": "Update a tag",
    "name": "UpdateTag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "tagId",
            "description": "<p>The tag _id</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The new name of the tag.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example body:",
          "content": "{\"name\":\"prac-tag\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example result:",
          "content": "{\"success\":true,\"data\":{\"name\":\"practice-tag\",\"id\":\"8bc0afbf-ab8e-49a4-982d-67a40557ed1a\"},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tags.js",
    "groupTitle": "Tag",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "InvalidRequestParameters",
            "description": "<p>&quot;tagId&quot; must be a valid UUID corresponding to a tag belonging to the user.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TagNotFound",
            "description": "<p>The specified tag could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/:taskId/checklist",
    "title": "Add an item to the task's checklist",
    "name": "AddChecklistItem",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id or alias</p>"
          }
        ],
        "Body Parameters": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>The text of the checklist item</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example body data:",
          "content": "{\"text\":\"Do this subtask\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated task</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example return:",
          "content": "{\"success\":true,\"data\":{\"_id\":\"84f02d6a-7b43-4818-a35c-d3336cec4880\",\"userId\":\"b0413351-405f-416f-8787-947ec1c85199\",\"text\":\"Test API Params\",\"alias\":\"test-api-params\",\"type\":\"todo\",\"notes\":\"\",\"tags\":[],\"value\":0,\"priority\":2,\"attribute\":\"int\",\"challenge\":{\"taskId\":\"4a29874c-0308-417b-a909-2a7d262b49f6\",\"id\":\"f23c12f2-5830-4f15-9c36-e17fd729a812\"},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[],\"createdAt\":\"2017-01-13T21:23:05.949Z\",\"updatedAt\":\"2017-01-14T03:38:07.406Z\",\"checklist\":[{\"id\":\"afe4079d-dff1-47d9-9b06-5d76c69ddb12\",\"text\":\"Do this subtask\",\"completed\":false}],\"collapseChecklist\":false,\"completed\":false,\"id\":\"84f02d6a-7b43-4818-a35c-d3336cec4880\"},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/:taskId/tags/:tagId",
    "title": "Add a tag to a task",
    "name": "AddTagToTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id or alias</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "tagId",
            "description": "<p>The tag id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated task</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example return:",
          "content": "{\"success\":true,\"data\":{\"_id\":\"84f02d6a-7b43-4818-a35c-d3336cec4880\",\"userId\":\"b0413351-405f-416f-8787-947ec1c85199\",\"text\":\"Test API Params\",\"alias\":\"test-api-params\",\"type\":\"todo\",\"notes\":\"\",\"tags\":[\"3d5d324d-a042-4d5f-872e-0553e228553e\"],\"value\":-1,\"priority\":2,\"attribute\":\"int\",\"challenge\":{\"taskId\":\"4a29874c-0308-417b-a909-2a7d262b49f6\",\"id\":\"f23c12f2-5830-4f15-9c36-e17fd729a812\"},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[],\"createdAt\":\"2017-01-13T21:23:05.949Z\",\"updatedAt\":\"2017-01-14T19:41:29.466Z\",\"checklist\":[],\"collapseChecklist\":false,\"completed\":false,\"id\":\"84f02d6a-7b43-4818-a35c-d3336cec4880\"},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "Invalid-request-parameters",
            "description": "<p>&quot;tagId&quot; must be a valid UUID corresponding to a tag belonging to the user.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "TagExists",
            "description": "<p>The task is already tagged with given tag.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/:taskId/approve/:userId",
    "title": "Approve a user's task",
    "description": "<p>Approves a user assigned to a group task</p>",
    "version": "3.0.0",
    "name": "ApproveTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "taskId",
            "description": "<p>The id of the task that is the original group task</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "userId",
            "description": "<p>The id of the user that will be approved</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "task",
            "description": "<p>The approved task</p>"
          }
        ]
      }
    },
    "filename": "website/server/controllers/api-v3/tasks/groups.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/:taskId/assign/:assignedUserId",
    "title": "Assign a group task to a user",
    "description": "<p>Assigns a user to a group task</p>",
    "name": "AssignTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "taskId",
            "description": "<p>The id of the task that will be assigned</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "userId",
            "description": "<p>The id of the user that will be assigned to the task</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "data",
            "description": "<p>An object if a single task was created, otherwise an array of tasks</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks/groups.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/clearCompletedTodos",
    "title": "Delete user's completed todos",
    "name": "ClearCompletedTodos",
    "group": "Task",
    "examples": [
      {
        "title": "Example call:",
        "content": "curl -X \"POST\" https://habitica.com/api/v3/tasks/ClearCompletedTodos",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example return:",
          "content": "{\"success\":true,\"data\":{},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/challenge/:challengeId",
    "title": "Create a new task belonging to a challenge",
    "description": "<p>Can be passed an object to create a single task or an array of objects to create multiple tasks.</p>",
    "name": "CreateChallengeTasks",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "challengeId",
            "description": "<p>The id of the challenge the new task(s) will belong to</p>"
          }
        ],
        "Body Parameters": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>The text to be displayed for the task</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "allowedValues": [
              "\"habit\"",
              "\"daily\"",
              "\"todo\"",
              "\"reward\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Task type, options are: &quot;habit&quot;, &quot;daily&quot;, &quot;todo&quot;, &quot;reward&quot;.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias to assign to task</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "allowedValues": [
              "\"str\"",
              "\"int\"",
              "\"per\"",
              "\"con\""
            ],
            "optional": true,
            "field": "attribute",
            "description": "<p>User's attribute to use, options are: &quot;str&quot;, &quot;int&quot;, &quot;per&quot;, &quot;con&quot;</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "collapseChecklist",
            "defaultValue": "false",
            "description": "<p>Determines if a checklist will be displayed</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "notes",
            "description": "<p>Extra notes</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "date",
            "description": "<p>Due date to be shown in task list. Only valid for type &quot;todo.&quot;</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "allowedValues": [
              "\"0.1\"",
              "\"1\"",
              "\"1.5\"",
              "\"2\""
            ],
            "optional": true,
            "field": "priority",
            "defaultValue": "1",
            "description": "<p>Difficulty, options are 0.1, 1, 1.5, 2; eqivalent of Trivial, Easy, Medium, Hard.</p>"
          },
          {
            "group": "Body",
            "type": "string[]",
            "optional": true,
            "field": "reminders",
            "description": "<p>Array of reminders, each an object that must include: a UUID, startDate and time. For example {&quot;id&quot;:&quot;ed427623-9a69-4aac-9852-13deb9c190c3&quot;,&quot;startDate&quot;:&quot;1/16/17&quot;,&quot;time&quot;:&quot;1/16/17&quot; }</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "allowedValues": [
              "\"weekly\"",
              "\"daily\""
            ],
            "optional": true,
            "field": "frequency",
            "defaultValue": "weekly",
            "description": "<p>Value &quot;weekly&quot; enables &quot;On days of the week&quot;, value &quot;daily&quot; enables &quot;EveryX Days&quot;. Only valid for type &quot;daily&quot;.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "repeat",
            "defaultValue": "true",
            "description": "<p>List of objects for days of the week,  Days that are true will be repeated upon. Only valid for type &quot;daily&quot;. Any days not specified will be marked as true. Days are: su, m, t, w, th, f, s. Value of frequency must be &quot;weekly&quot;. For example, to skip repeats on Mon and Fri: &quot;repeat&quot;:{&quot;f&quot;:false,&quot;m&quot;:false}</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "everyX",
            "defaultValue": "1",
            "description": "<p>Value of frequency must be &quot;daily&quot;, the number of days until this daily task is available again.</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "streak",
            "defaultValue": "0",
            "description": "<p>Number of days that the task has consecutively been checked off. Only valid for type &quot;daily&quot;</p>"
          },
          {
            "group": "Body",
            "type": "date",
            "optional": true,
            "field": "startDate",
            "description": "<p>Date when the task will first become available. Only valid for type &quot;daily&quot;</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "up",
            "defaultValue": "true",
            "description": "<p>Only valid for type &quot;habit&quot; If true, enables the &quot;+&quot; under &quot;Directions/Action&quot; for &quot;Good habits&quot;</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "down",
            "defaultValue": "true",
            "description": "<p>Only valid for type &quot;habit&quot; If true, enables the &quot;-&quot; under &quot;Directions/Action&quot; for &quot;Bad habits&quot;</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "value",
            "defaultValue": "0",
            "description": "<p>Only valid for type &quot;reward.&quot; The cost in gold of the reward</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"type\":\"todo\",\"text\":\"Test API Params\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "optional": false,
            "field": "data",
            "description": "<p>An object if a single task was created, otherwise an array of tasks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example return:",
          "content": "{\"success\":true,\"data\":{\"text\":\"Test API Params\",\"type\":\"todo\",\"notes\":\"\",\"tags\":[],\"value\":0,\"priority\":1,\"attribute\":\"str\",\"challenge\":{\"id\":\"f23c12f2-5830-4f15-9c36-e17fd729a812\"},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[],\"_id\":\"4a29874c-0308-417b-a909-2a7d262b49f6\",\"createdAt\":\"2017-01-13T21:23:05.949Z\",\"updatedAt\":\"2017-01-13T21:23:05.949Z\",\"checklist\":[],\"collapseChecklist\":false,\"completed\":false,\"id\":\"4a29874c-0308-417b-a909-2a7d262b49f6\"},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "MustBeType",
            "description": "<p>Task type must be one of &quot;habit&quot;, &quot;daily&quot;, &quot;todo&quot;, &quot;reward&quot;.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "Text-ValidationFailed",
            "description": "<p>Path 'text' is required.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "Alias-ValidationFailed",
            "description": "<p>Task short names can only contain alphanumeric characters, underscores and dashes.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "Value-ValidationFailed",
            "description": "<p><code>x</code> is not a valid enum value for path <code>(body param)</code>.</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "There",
            "description": "<p>is no account that uses those credentials.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChecklistNotFound",
            "description": "<p>The specified checklist item could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/group/:groupId",
    "title": "Create a new task belonging to a group",
    "description": "<p>Can be passed an object to create a single task or an array of objects to create multiple tasks.</p>",
    "name": "CreateGroupTasks",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The id of the group the new task(s) will belong to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "data",
            "description": "<p>An object if a single task was created, otherwise an array of tasks</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks/groups.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/user",
    "title": "Create a new task belonging to the user",
    "description": "<p>Can be passed an object to create a single task or an array of objects to create multiple tasks.</p>",
    "name": "CreateUserTasks",
    "group": "Task",
    "parameter": {
      "fields": {
        "Body Parameters": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>The text to be displayed for the task</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "allowedValues": [
              "\"habit\"",
              "\"daily\"",
              "\"todo\"",
              "\"reward\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Task type, options are: &quot;habit&quot;, &quot;daily&quot;, &quot;todo&quot;, &quot;reward&quot;.</p>"
          },
          {
            "group": "Body",
            "type": "string[]",
            "optional": true,
            "field": "tags",
            "description": "<p>Array of UUIDs of tags</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias to assign to task</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "allowedValues": [
              "\"str\"",
              "\"int\"",
              "\"per\"",
              "\"con\""
            ],
            "optional": true,
            "field": "attribute",
            "description": "<p>User's attribute to use, options are: &quot;str&quot;, &quot;int&quot;, &quot;per&quot;, &quot;con&quot;</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "collapseChecklist",
            "defaultValue": "false",
            "description": "<p>Determines if a checklist will be displayed</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "notes",
            "description": "<p>Extra notes</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "date",
            "description": "<p>Due date to be shown in task list. Only valid for type &quot;todo.&quot;</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "allowedValues": [
              "\"0.1\"",
              "\"1\"",
              "\"1.5\"",
              "\"2\""
            ],
            "optional": true,
            "field": "priority",
            "defaultValue": "1",
            "description": "<p>Difficulty, options are 0.1, 1, 1.5, 2; eqivalent of Trivial, Easy, Medium, Hard.</p>"
          },
          {
            "group": "Body",
            "type": "string[]",
            "optional": true,
            "field": "reminders",
            "description": "<p>Array of reminders, each an object that must include: a UUID, startDate and time. For example {&quot;id&quot;:&quot;ed427623-9a69-4aac-9852-13deb9c190c3&quot;,&quot;startDate&quot;:&quot;1/16/17&quot;,&quot;time&quot;:&quot;1/16/17&quot; }</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "allowedValues": [
              "\"weekly\"",
              "\"daily\""
            ],
            "optional": true,
            "field": "frequency",
            "defaultValue": "weekly",
            "description": "<p>Value &quot;weekly&quot; enables &quot;On days of the week&quot;, value &quot;daily&quot; enables &quot;EveryX Days&quot;. Only valid for type &quot;daily&quot;.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "repeat",
            "defaultValue": "true",
            "description": "<p>List of objects for days of the week,  Days that are true will be repeated upon. Only valid for type &quot;daily&quot;. Any days not specified will be marked as true. Days are: su, m, t, w, th, f, s. Value of frequency must be &quot;weekly&quot;. For example, to skip repeats on Mon and Fri: &quot;repeat&quot;:{&quot;f&quot;:false,&quot;m&quot;:false}</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "everyX",
            "defaultValue": "1",
            "description": "<p>Value of frequency must be &quot;daily&quot;, the number of days until this daily task is available again.</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "streak",
            "defaultValue": "0",
            "description": "<p>Number of days that the task has consecutively been checked off. Only valid for type &quot;daily&quot;</p>"
          },
          {
            "group": "Body",
            "type": "date",
            "optional": true,
            "field": "startDate",
            "description": "<p>Date when the task will first become available. Only valid for type &quot;daily&quot;</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "up",
            "defaultValue": "true",
            "description": "<p>Only valid for type &quot;habit&quot; If true, enables the &quot;+&quot; under &quot;Directions/Action&quot; for &quot;Good habits&quot;</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "down",
            "defaultValue": "true",
            "description": "<p>Only valid for type &quot;habit&quot; If true, enables the &quot;-&quot; under &quot;Directions/Action&quot; for &quot;Bad habits&quot;</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "value",
            "defaultValue": "0",
            "description": "<p>Only valid for type &quot;reward.&quot; The cost in gold of the reward</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"text\":\"Update Habitica API Documentation - Tasks\",\n  \"type\":\"todo\",\n  \"alias\":\"hab-api-tasks\",\n  \"notes\":\"Update the tasks api on GitHub\",\n  \"tags\":[\"ed427623-9a69-4aac-9852-13deb9c190c3\"],\n  \"priority\":2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "optional": false,
            "field": "data",
            "description": "<p>An object if a single task was created, otherwise an array of tasks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": true,\n  \"data\": {\n    \"userId\": \"b0413351-405f-416f-8787-947ec1c85199\",\n    \"alias\": \"hab-api-tasks\",\n    \"text\": \"Update Habitica API Documentation - Tasks\",\n    \"type\": \"todo\",\n    \"notes\": \"Update the tasks api on GitHub\",\n    \"tags\": [\n      \"ed427623-9a69-4aac-9852-13deb9c190c3\"\n    ],\n    \"value\": 0,\n    \"priority\": 2,\n    \"attribute\": \"str\",\n    \"challenge\": {\n\n    },\n    \"group\": {\n      \"assignedUsers\": [\n\n      ],\n      \"approval\": {\n        \"required\": false,\n        \"approved\": false,\n        \"requested\": false\n      }\n    },\n    \"reminders\": [\n\n    ],\n    \"_id\": \"829d435b-edc4-498c-a30e-e52361a0f35a\",\n    \"createdAt\": \"2017-01-12T02:11:02.876Z\",\n    \"updatedAt\": \"2017-01-12T02:11:02.876Z\",\n    \"checklist\": [\n\n    ],\n    \"collapseChecklist\": false,\n    \"completed\": false,\n    \"id\": \"829d435b-edc4-498c-a30e-e52361a0f35a\"\n  },\n  \"notifications\": [\n\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "MustBeType",
            "description": "<p>Task type must be one of &quot;habit&quot;, &quot;daily&quot;, &quot;todo&quot;, &quot;reward&quot;.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "Text-ValidationFailed",
            "description": "<p>Path 'text' is required.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "Alias-ValidationFailed",
            "description": "<p>Task short names can only contain alphanumeric characters, underscores and dashes.</p>"
          },
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "Value-ValidationFailed",
            "description": "<p><code>x</code> is not a valid enum value for path <code>(body param)</code>.</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "There",
            "description": "<p>is no account that uses those credentials.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChecklistNotFound",
            "description": "<p>The specified checklist item could not be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"success\": false,\n  \"error\": \"BadRequest\",\n  \"message\": \"todo validation failed\",\n  \"errors\": [\n      {\n        \"message\": \"Path `text` is required.\",\n        \"path\": \"text\"\n      }\n    ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "delete",
    "url": "/api/v3/tasks/:taskId",
    "title": "Delete a task given its id",
    "name": "DeleteTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id or alias</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example call:",
        "content": "curl -X \"DELETE\" https://habitica.com/api/v3/tasks/3d5d324d-a042-4d5f-872e-0553e228553e",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Challenge",
            "description": "<p>A task belonging to a challenge can't be deleted.</p>"
          },
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Group",
            "description": "<p>Can't delete group tasks that are assigned to you</p>"
          },
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "ChallengeLeader",
            "description": "<p>Tasks belonging to a challenge can only be edited by the leader.</p>"
          },
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "GroupLeader",
            "description": "<p>Not authorized to manage tasks!</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/api/v3/tasks/challenge/:challengeId",
    "title": "Get a challenge's tasks",
    "name": "GetChallengeTasks",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "challengeId",
            "description": "<p>The id of the challenge from which to retrieve the tasks</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"habits\"",
              "\"dailys\"",
              "\"todos\"",
              "\"rewards\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Optional query parameter to return just a type of tasks</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example use:",
        "content": "curl -i https://habitica.com/api/v3/tasks/challenge/f23c12f2-5830-4f15-9c36-e17fd729a812",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>An array of tasks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":true,\"data\":[{\"_id\":\"5f12bfba-da30-4733-ad01-9c42f9817975\",\"text\":\"API Trial\",\"type\":\"habit\",\"notes\":\"\",\"tags\":[],\"value\":27.70767809690112,\"priority\":1.5,\"attribute\":\"str\",\"challenge\":{\"id\":\"f23c12f2-5830-4f15-9c36-e17fd729a812\"},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[],\"createdAt\":\"2017-01-12T19:03:33.485Z\",\"updatedAt\":\"2017-01-13T17:45:52.442Z\",\"history\":[{\"date\":1484257319183,\"value\":18.53316748293123},{\"date\":1484329552441,\"value\":27.70767809690112}],\"down\":false,\"up\":true,\"id\":\"5f12bfba-da30-4733-ad01-9c42f9817975\"},{\"_id\":\"54a81d23-529c-4daa-a6f7-c5c6e7e84936\",\"text\":\"Challenge TODO\",\"type\":\"todo\",\"notes\":\"\",\"tags\":[],\"value\":2,\"priority\":2,\"attribute\":\"str\",\"challenge\":{\"id\":\"f23c12f2-5830-4f15-9c36-e17fd729a812\"},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[],\"createdAt\":\"2017-01-12T19:07:10.310Z\",\"updatedAt\":\"2017-01-13T20:24:51.070Z\",\"checklist\":[],\"collapseChecklist\":false,\"completed\":false,\"id\":\"54a81d23-529c-4daa-a6f7-c5c6e7e84936\"}],\"notifications\":[]}",
          "content": "{\"success\":true,\"data\":[{\"_id\":\"5f12bfba-da30-4733-ad01-9c42f9817975\",\"text\":\"API Trial\",\"type\":\"habit\",\"notes\":\"\",\"tags\":[],\"value\":27.70767809690112,\"priority\":1.5,\"attribute\":\"str\",\"challenge\":{\"id\":\"f23c12f2-5830-4f15-9c36-e17fd729a812\"},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[],\"createdAt\":\"2017-01-12T19:03:33.485Z\",\"updatedAt\":\"2017-01-13T17:45:52.442Z\",\"history\":[{\"date\":1484257319183,\"value\":18.53316748293123},{\"date\":1484329552441,\"value\":27.70767809690112}],\"down\":false,\"up\":true,\"id\":\"5f12bfba-da30-4733-ad01-9c42f9817975\"},{\"_id\":\"54a81d23-529c-4daa-a6f7-c5c6e7e84936\",\"text\":\"Challenge TODO\",\"type\":\"todo\",\"notes\":\"\",\"tags\":[],\"value\":2,\"priority\":2,\"attribute\":\"str\",\"challenge\":{\"id\":\"f23c12f2-5830-4f15-9c36-e17fd729a812\"},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[],\"createdAt\":\"2017-01-12T19:07:10.310Z\",\"updatedAt\":\"2017-01-13T20:24:51.070Z\",\"checklist\":[],\"collapseChecklist\":false,\"completed\":false,\"id\":\"54a81d23-529c-4daa-a6f7-c5c6e7e84936\"}],\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/approvals/group/:groupId",
    "title": "Get a group's approvals",
    "version": "3.0.0",
    "name": "GetGroupApprovals",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The id of the group from which to retrieve the approvals</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>An array of tasks</p>"
          }
        ]
      }
    },
    "filename": "website/server/controllers/api-v3/tasks/groups.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/api/v3/tasks/group/:groupId",
    "title": "Get a group's tasks",
    "name": "GetGroupTasks",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "groupId",
            "description": "<p>The id of the group from which to retrieve the tasks</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"habits\"",
              "\"dailys\"",
              "\"todos\"",
              "\"rewards\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Optional query parameter to return just a type of tasks</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>An array of tasks</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks/groups.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/api/v3/tasks/:taskId",
    "title": "Get a task",
    "name": "GetTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id or alias</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example use:",
        "content": "curl -i https://habitica.com/api/v3/tasks/54a81d23-529c-4daa-a6f7-c5c6e7e84936",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The task object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example returned object",
          "content": "{\"success\":true,\"data\":{\"_id\":\"2b774d70-ec8b-41c1-8967-eb6b13d962ba\",\"userId\":\"b0413351-405f-416f-8787-947ec1c85199\",\"text\":\"API Trial\",\"alias\":\"apiTrial\",\"type\":\"habit\",\"notes\":\"\",\"tags\":[],\"value\":11.996661122825959,\"priority\":1.5,\"attribute\":\"str\",\"challenge\":{\"taskId\":\"5f12bfba-da30-4733-ad01-9c42f9817975\",\"id\":\"f23c12f2-5830-4f15-9c36-e17fd729a812\"},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[],\"createdAt\":\"2017-01-12T19:03:33.495Z\",\"updatedAt\":\"2017-01-13T20:52:02.927Z\",\"history\":[{\"value\":1,\"date\":1484248053486},{\"value\":1.9747,\"date\":1484252965224},{\"value\":2.9253562257358428,\"date\":1484252966902},{\"value\":3.853133245658556,\"date\":1484257191129},{\"value\":4.759112700885761,\"date\":1484257318911},{\"value\":5.6443010177121415,\"date\":1484257319164},{\"value\":3.752384470969301,\"date\":1484311429292},{\"value\":4.660705953838478,\"date\":1484311575632},{\"value\":5.54812929062314,\"date\":1484315395369},{\"value\":6.415599723011605,\"date\":1484329050485},{\"value\":7.263999553295137,\"date\":1484329050885},{\"value\":8.094153625212375,\"date\":1484329051509},{\"value\":8.906834219714574,\"date\":1484329088943},{\"value\":9.70276543915464,\"date\":1484329089547},{\"value\":10.482627142836241,\"date\":1484329089835},{\"value\":11.24705848799571,\"date\":1484329095500},{\"value\":11.996661122825959,\"date\":1484329552423}],\"down\":false,\"up\":true,\"id\":\"2b774d70-ec8b-41c1-8967-eb6b13d962ba\"},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/v3/tasks/user",
    "title": "Get a user's tasks",
    "name": "GetUserTasks",
    "group": "Task",
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "string",
            "allowedValues": [
              "\"habits\"",
              "\"dailys\"",
              "\"todos\"",
              "\"rewards\"",
              "\"completedTodos\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Optional query parameter to return just a type of tasks. By default all types will be returned except completed todos that must be requested separately. The &quot;completedTodos&quot; type returns only the 30 most recently completed.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>An array of tasks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":true,\"data\":[{\"_id\":\"8a9d461b-f5eb-4a16-97d3-c03380c422a3\",\"userId\":\"b0413351-405f-416f-8787-947ec1c85199\",\"text\":\"15 minute break\",\"type\":\"reward\",\"notes\":\"\",\"tags\":[],\"value\":10,\"priority\":1,\"attribute\":\"str\",\"challenge\":{},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[],\"createdAt\":\"2017-01-07T17:52:09.121Z\",\"updatedAt\":\"2017-01-11T14:25:32.504Z\",\"id\":\"8a9d461b-f5eb-4a16-97d3-c03380c422a3\"},,{\"_id\":\"84c2e874-a8c9-4673-bd31-d97a1a42e9a3\",\"userId\":\"b0413351-405f-416f-8787-947ec1c85199\",\"alias\":\"prac31\",\"text\":\"Practice Task 31\",\"type\":\"daily\",\"notes\":\"\",\"tags\":[],\"value\":1,\"priority\":1,\"attribute\":\"str\",\"challenge\":{},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[{\"time\":\"2017-01-13T16:21:00.074Z\",\"startDate\":\"2017-01-13T16:20:00.074Z\",\"id\":\"b8b549c4-8d56-4e49-9b38-b4dcde9763b9\"}],\"createdAt\":\"2017-01-13T16:34:06.632Z\",\"updatedAt\":\"2017-01-13T16:49:35.762Z\",\"checklist\":[],\"collapseChecklist\":false,\"completed\":true,\"history\":[],\"streak\":1,\"repeat\":{\"su\":false,\"s\":false,\"f\":true,\"th\":true,\"w\":true,\"t\":true,\"m\":true},\"startDate\":\"2017-01-13T00:00:00.000Z\",\"everyX\":1,\"frequency\":\"weekly\",\"id\":\"84c2e874-a8c9-4673-bd31-d97a1a42e9a3\"}],\"notifications\":[]}",
          "content": "{\"success\":true,\"data\":[{\"_id\":\"8a9d461b-f5eb-4a16-97d3-c03380c422a3\",\"userId\":\"b0413351-405f-416f-8787-947ec1c85199\",\"text\":\"15 minute break\",\"type\":\"reward\",\"notes\":\"\",\"tags\":[],\"value\":10,\"priority\":1,\"attribute\":\"str\",\"challenge\":{},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[],\"createdAt\":\"2017-01-07T17:52:09.121Z\",\"updatedAt\":\"2017-01-11T14:25:32.504Z\",\"id\":\"8a9d461b-f5eb-4a16-97d3-c03380c422a3\"},,{\"_id\":\"84c2e874-a8c9-4673-bd31-d97a1a42e9a3\",\"userId\":\"b0413351-405f-416f-8787-947ec1c85199\",\"alias\":\"prac31\",\"text\":\"Practice Task 31\",\"type\":\"daily\",\"notes\":\"\",\"tags\":[],\"value\":1,\"priority\":1,\"attribute\":\"str\",\"challenge\":{},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[{\"time\":\"2017-01-13T16:21:00.074Z\",\"startDate\":\"2017-01-13T16:20:00.074Z\",\"id\":\"b8b549c4-8d56-4e49-9b38-b4dcde9763b9\"}],\"createdAt\":\"2017-01-13T16:34:06.632Z\",\"updatedAt\":\"2017-01-13T16:49:35.762Z\",\"checklist\":[],\"collapseChecklist\":false,\"completed\":true,\"history\":[],\"streak\":1,\"repeat\":{\"su\":false,\"s\":false,\"f\":true,\"th\":true,\"w\":true,\"t\":true,\"m\":true},\"startDate\":\"2017-01-13T00:00:00.000Z\",\"everyX\":1,\"frequency\":\"weekly\",\"id\":\"84c2e874-a8c9-4673-bd31-d97a1a42e9a3\"}],\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "There",
            "description": "<p>is no account that uses those credentials.</p>"
          }
        ],
        "": [
          {
            "group": "BadRequest",
            "optional": false,
            "field": "Invalid_request_parameters",
            "description": "<p>Error returned if the type URL param was not correct.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/api/v3/group/:groupId/tasks/:taskId/move/to/:position",
    "title": "Move a group task to a specified position",
    "description": "<p>Moves a group task to a specified position</p>",
    "version": "3.0.0",
    "name": "GroupMoveTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "position",
            "description": "<p>Query parameter - Where to move the task (-1 means push to bottom). First position is 0</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>The new tasks order (group.tasksOrder.{task.type}s)</p>"
          }
        ]
      }
    },
    "filename": "website/server/controllers/api-v3/tasks/groups.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/:taskId/move/to/:position",
    "title": "Move a task to a new position",
    "description": "<p>Note: completed To-Dos are not sortable, do not appear in user.tasksOrder.todos, and are ordered by date of completion.</p>",
    "name": "MoveTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id or alias</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "position",
            "description": "<p>Query parameter - Where to move the task. 0 = top of the list. -1 = bottom of the list.  (-1 means push to bottom). First position is 0</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>The new tasks order for the specific type that the taskID belongs to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":true,\"data\":[\"8d7e237a-b259-46ee-b431-33621256bb0b\",\"2b774d70-ec8b-41c1-8967-eb6b13d962ba\",\"f03d4a2b-9c36-4f33-9b5f-bae0aed23a49\"],\"notifications\":[]}",
          "content": "{\"success\":true,\"data\":[\"8d7e237a-b259-46ee-b431-33621256bb0b\",\"2b774d70-ec8b-41c1-8967-eb6b13d962ba\",\"f03d4a2b-9c36-4f33-9b5f-bae0aed23a49\"],\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/v3/tasks/:taskId/checklist/:itemId",
    "title": "Delete a checklist item from a task",
    "name": "RemoveChecklistItem",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id or alias</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "itemId",
            "description": "<p>The checklist item _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated task</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example return:",
          "content": "{\"success\":true,\"data\":{\"_id\":\"84f02d6a-7b43-4818-a35c-d3336cec4880\",\"userId\":\"b0413351-405f-416f-8787-947ec1c85199\",\"text\":\"Test API Params\",\"alias\":\"test-api-params\",\"type\":\"todo\",\"notes\":\"\",\"tags\":[],\"value\":-1,\"priority\":2,\"attribute\":\"int\",\"challenge\":{\"taskId\":\"4a29874c-0308-417b-a909-2a7d262b49f6\",\"id\":\"f23c12f2-5830-4f15-9c36-e17fd729a812\"},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[],\"createdAt\":\"2017-01-13T21:23:05.949Z\",\"updatedAt\":\"2017-01-14T19:35:41.881Z\",\"checklist\":[],\"collapseChecklist\":false,\"completed\":false,\"id\":\"84f02d6a-7b43-4818-a35c-d3336cec4880\"},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChecklistNotFound",
            "description": "<p>The specified checklist item could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/v3/tasks/:taskId/tags/:tagId",
    "title": "Delete a tag from a task",
    "name": "RemoveTagFromTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id or alias</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "tagId",
            "description": "<p>The tag id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example use:",
        "content": "curl -X \"DELETE\" https://habitica.com/api/v3/tasks/test-api-params/tags/3d5d324d-a042-4d5f-872e-0553e228553e",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated task</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example return:",
          "content": "{\"success\":true,\"data\":{\"_id\":\"84f02d6a-7b43-4818-a35c-d3336cec4880\",\"userId\":\"b0413351-405f-416f-8787-947ec1c85199\",\"text\":\"Test API Params\",\"alias\":\"test-api-params\",\"type\":\"todo\",\"notes\":\"\",\"tags\":[],\"value\":-1,\"priority\":2,\"attribute\":\"int\",\"challenge\":{\"taskId\":\"4a29874c-0308-417b-a909-2a7d262b49f6\",\"id\":\"f23c12f2-5830-4f15-9c36-e17fd729a812\"},\"group\":{\"assignedUsers\":[],\"approval\":{\"required\":false,\"approved\":false,\"requested\":false}},\"reminders\":[],\"createdAt\":\"2017-01-13T21:23:05.949Z\",\"updatedAt\":\"2017-01-14T20:02:18.206Z\",\"checklist\":[],\"collapseChecklist\":false,\"completed\":false,\"id\":\"84f02d6a-7b43-4818-a35c-d3336cec4880\"},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TagNotFound",
            "description": "<p>The specified tag could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/:taskId/checklist/:itemId/score",
    "title": "Score a checklist item",
    "name": "ScoreChecklistItem",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id or alias</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "itemId",
            "description": "<p>The checklist item _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated task</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChecklistNotFound",
            "description": "<p>The specified checklist item could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/:taskId/score/:direction",
    "title": "Score a task",
    "name": "ScoreTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id or alias</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"up\"",
              "\"down\""
            ],
            "optional": false,
            "field": "direction",
            "description": "<p>The direction for scoring the task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scoreNotes",
            "description": "<p>Notes explaining the scoring</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example call:",
        "content": "curl -X \"POST\" https://habitica.com/api/v3/tasks/test-api-params/score/up",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The user stats</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data._tmp",
            "description": "<p>If an item was dropped it'll be returned in te _tmp object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.delta",
            "description": "<p>The delta</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example result:",
          "content": "{\"success\":true,\"data\":{\"delta\":0.9746999906450404,\"_tmp\":{},\"hp\":49.06645205596985,\"mp\":37.2008917491047,\"exp\":101.93810026267543,\"gp\":77.09694176716997,\"lvl\":19,\"class\":\"rogue\",\"points\":0,\"str\":5,\"con\":3,\"int\":3,\"per\":8,\"buffs\":{\"str\":9,\"int\":9,\"per\":9,\"con\":9,\"stealth\":0,\"streaks\":false,\"snowball\":false,\"spookySparkles\":false,\"shinySeed\":false,\"seafoam\":false},\"training\":{\"int\":0,\"per\":0,\"str\":0,\"con\":0}},\"notifications\":[]}",
          "type": "json"
        },
        {
          "title": "Example result with item drop:",
          "content": "{\"success\":true,\"data\":{\"delta\":1.0259567046270648,\"_tmp\":{\"quest\":{\"progressDelta\":1.2362778290756147,\"collection\":1},\"drop\":{\"target\":\"Zombie\",\"article\":\"\",\"canDrop\":true,\"value\":1,\"key\":\"RottenMeat\",\"type\":\"Food\",\"dialog\":\"You've found Rotten Meat! Feed this to a pet and it may grow into a sturdy steed.\"}},\"hp\":50,\"mp\":66.2390716654227,\"exp\":143.93810026267545,\"gp\":135.12889840462591,\"lvl\":20,\"class\":\"rogue\",\"points\":0,\"str\":6,\"con\":3,\"int\":3,\"per\":8,\"buffs\":{\"str\":10,\"int\":10,\"per\":10,\"con\":10,\"stealth\":0,\"streaks\":false,\"snowball\":false,\"spookySparkles\":false,\"shinySeed\":false,\"seafoam\":false},\"training\":{\"int\":0,\"per\":0,\"str\":0,\"con\":0}},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/:taskId/unassign/:assignedUserId",
    "title": "Unassign a user from a task",
    "description": "<p>Unassigns a user to from a group task</p>",
    "name": "UnassignTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "taskId",
            "description": "<p>The id of the task that will be assigned</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "userId",
            "description": "<p>The id of the user that will be assigned to the task</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "data",
            "description": "<p>An object if a single task was created, otherwise an array of tasks</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks/groups.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/unlink-all/:challengeId",
    "title": "Unlink all tasks from a challenge",
    "name": "UnlinkAllTasks",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "challengeId",
            "description": "<p>The challenge _id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keep",
            "description": "<p>Query parameter - keep-all or remove-all</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl -X \"POST\" https://habitica.com/api/v3/tasks/unlink-all/f23c12f2-5830-4f15-9c36-e17fd729a812?keep=remove-all",
        "content": "curl -X \"POST\" https://habitica.com/api/v3/tasks/unlink-all/f23c12f2-5830-4f15-9c36-e17fd729a812?keep=remove-all",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example return:",
          "content": "{\"success\":true,\"data\":{},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "Broken",
            "description": "<p>Only broken challenges tasks can be unlinked.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/api/v3/tasks/unlink-one/:taskId",
    "title": "Unlink a challenge task",
    "name": "UnlinkOneTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id or alias</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keep",
            "description": "<p>Query parameter - keep or remove</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example call:",
        "content": "curl -X \"POST\" https://habitica.com/api/v3/tasks/unlink-one/ee882e1d-ebd1-4716-88f2-4f9e47d947a8?keep=keep",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "Broken",
            "description": "<p>Only broken challenges tasks can be unlinked.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "put",
    "url": "/api/v3/tasks/:taskId/checklist/:itemId",
    "title": "Update a checklist item",
    "name": "UpdateChecklistItem",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id or alias</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "itemId",
            "description": "<p>The checklist item _id</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>The text that will replace the current checkitem text.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example body:",
          "content": "{\"text\":\"Czech 1\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated task</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChecklistNotFound",
            "description": "<p>The specified checklist item could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "ChallengeNotFound",
            "description": "<p>The specified challenge could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/api/v3/tasks/:taskId",
    "title": "Update a task",
    "name": "UpdateTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The task _id or alias</p>"
          }
        ],
        "Body Parameters": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "text",
            "description": "<p>The text to be displayed for the task</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "allowedValues": [
              "\"str\"",
              "\"int\"",
              "\"per\"",
              "\"con\""
            ],
            "optional": true,
            "field": "attribute",
            "description": "<p>User's attribute to use, options are: &quot;str&quot;, &quot;int&quot;, &quot;per&quot;, &quot;con&quot;</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "collapseChecklist",
            "defaultValue": "false",
            "description": "<p>Determines if a checklist will be displayed</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "notes",
            "description": "<p>Extra notes</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "date",
            "description": "<p>Due date to be shown in task list. Only valid for type &quot;todo.&quot;</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "allowedValues": [
              "\"0.1\"",
              "\"1\"",
              "\"1.5\"",
              "\"2\""
            ],
            "optional": true,
            "field": "priority",
            "defaultValue": "1",
            "description": "<p>Difficulty, options are 0.1, 1, 1.5, 2; eqivalent of Trivial, Easy, Medium, Hard.</p>"
          },
          {
            "group": "Body",
            "type": "string[]",
            "optional": true,
            "field": "reminders",
            "description": "<p>Array of reminders, each an object that must include: a UUID, startDate and time.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "allowedValues": [
              "\"weekly\"",
              "\"daily\""
            ],
            "optional": true,
            "field": "frequency",
            "defaultValue": "weekly",
            "description": "<p>Value &quot;weekly&quot; enables &quot;On days of the week&quot;, value &quot;daily&quot; enables &quot;EveryX Days&quot;. Only valid for type &quot;daily&quot;.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "repeat",
            "defaultValue": "true",
            "description": "<p>List of objects for days of the week,  Days that are true will be repeated upon. Only valid for type &quot;daily&quot;. Any days not specified will be marked as true. Days are: su, m, t, w, th, f, s. Value of frequency must be &quot;weekly&quot;. For example, to skip repeats on Mon and Fri: &quot;repeat&quot;:{&quot;f&quot;:false,&quot;m&quot;:false}</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "everyX",
            "defaultValue": "1",
            "description": "<p>Value of frequency must be &quot;daily&quot;, the number of days until this daily task is available again.</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "streak",
            "defaultValue": "0",
            "description": "<p>Number of days that the task has consecutively been checked off. Only valid for type &quot;daily&quot;</p>"
          },
          {
            "group": "Body",
            "type": "date",
            "optional": true,
            "field": "startDate",
            "description": "<p>Date when the task will first become available. Only valid for type &quot;daily&quot;</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "up",
            "defaultValue": "true",
            "description": "<p>Only valid for type &quot;habit&quot; If true, enables the &quot;+&quot; under &quot;Directions/Action&quot; for &quot;Good habits&quot;</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "down",
            "defaultValue": "true",
            "description": "<p>Only valid for type &quot;habit&quot; If true, enables the &quot;-&quot; under &quot;Directions/Action&quot; for &quot;Bad habits&quot;</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "value",
            "defaultValue": "0",
            "description": "<p>Only valid for type &quot;reward.&quot; The cost in gold of the reward</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"notes\":\"This will be replace the notes, anything not specified will remain the same\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated task</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/tasks.js",
    "groupTitle": "Task",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/email/unsubscribe",
    "title": "Unsubscribe an email or user from email notifications",
    "description": "<p>This is a GET method included in official emails from Habitica that will unsubscribe the user from emails.</p>",
    "name": "UnsubscribeEmail",
    "group": "Unsubscribe",
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An unsubscription code</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Webpage",
            "description": "<p>An html success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "missingUnsubscriptionCode",
            "description": "<p>The unsubscription code is missing.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/top-level/email.js",
    "groupTitle": "Unsubscribe"
  },
  {
    "type": "post",
    "url": "/api/v3/user/block/:uuid",
    "title": "Block / unblock a user from sending you a PM",
    "name": "BlockUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "uuid",
            "description": "<p>The uuid of the user to block / unblock</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>user.inbox.blocks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":true,\"data\":[\"e4842579-g987-d2d2-8660-2f79e725fb79\"],\"notifications\":[]}",
          "content": "{\"success\":true,\"data\":[\"e4842579-g987-d2d2-8660-2f79e725fb79\"],\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "BadRequest",
            "optional": false,
            "field": "InvalidUUID",
            "description": "<p>UUID is incorrect.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/reset-password",
    "title": "Reset password",
    "description": "<p>Reset the user password</p>",
    "name": "ResetPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Body parameter - The email address of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The localized success message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/auth.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/v3/user/auth/update-email",
    "title": "Update email",
    "description": "<p>Change the user email address</p>",
    "name": "UpdateEmail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Body",
            "description": "<p>parameter - newEmail The new email address.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>The updated email address</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/auth.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/v3/user/auth/update-password",
    "title": "",
    "description": "<p>Update the password of a local user</p>",
    "name": "UpdatePassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Body parameter - The old password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>Body parameter - The new password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Body parameter - New password confirmation</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/auth.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/v3/user/auth/update-username",
    "title": "Update username",
    "description": "<p>Update the username of a local user</p>",
    "name": "UpdateUsername",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Body parameter - The current user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Body parameter - The new username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.username",
            "description": "<p>The new username</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/auth.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/allocate",
    "title": "Allocate a single attribute point",
    "name": "UserAllocate",
    "group": "User",
    "parameter": {
      "fields": {
        "Body Parameters": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"str\"",
              "\"con\"",
              "\"int\"",
              "\"per\""
            ],
            "optional": false,
            "field": "stat",
            "description": "<p>Query parameter - Default ='str'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example request",
          "content": "{\"stat\":\"int\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Returns stats from the user profile</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NoPoints",
            "description": "<p>Not enough attribute points to increment a stat.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n  \"success\": false,\n  \"error\": \"NotAuthorized\",\n  \"message\": \"You don't have enough attribute points.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/allocate-now",
    "title": "Allocate all attribute points",
    "description": "<p>Uses the user's chosen automatic allocation method, or if none, assigns all to STR. Note: will return success, even if there are 0 points to allocate.</p>",
    "name": "UserAllocateNow",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"success\": true,\n  \"data\": {\n    \"hp\": 50,\n    \"mp\": 38,\n    \"exp\": 7,\n    \"gp\": 284.8637271160258,\n    \"lvl\": 10,\n    \"class\": \"rogue\",\n    \"points\": 0,\n    \"str\": 2,\n    \"con\": 2,\n    \"int\": 3,\n    \"per\": 3,\n    \"buffs\": {\n      \"str\": 0,\n      \"int\": 0,\n      \"per\": 0,\n      \"con\": 0,\n      \"stealth\": 0,\n      \"streaks\": false,\n      \"snowball\": false,\n      \"spookySparkles\": false,\n      \"shinySeed\": false,\n      \"seafoam\": false\n    },\n    \"training\": {\n      \"int\": 0,\n      \"per\": 0,\n      \"str\": 0,\n      \"con\": 0\n    }\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>user.stats</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/buy/:key",
    "title": "Buy gear, armoire or potion",
    "description": "<p>Under the hood uses UserBuyGear, UserBuyPotion and UserBuyArmoire</p>",
    "name": "UserBuy",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The item to buy</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "data",
            "description": "<p>User's data profile</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Item purchased</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Purchased a rogue short sword for example:",
          "content": "{\n  \"success\": true,\n  \"data\": {\n    ---TRUNCATED USER RECORD---\n  },\n  \"message\": \"Bought Short Sword\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageAlreadyOwnGear",
            "description": "<p>Already own equipment</p>"
          },
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageNotEnoughGold",
            "description": "<p>Not enough gold for the purchase</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotAuthorized Already own",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"You already own that piece of equipment\"}",
          "type": "json"
        },
        {
          "title": "NotAuthorized Not enough gold",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not Enough Gold\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/buy-armoire",
    "title": "Buy an armoire item",
    "name": "UserBuyArmoire",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.items",
            "description": "<p>User's item inventory</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.flags",
            "description": "<p>User's flags</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.armoire",
            "description": "<p>Item given by the armoire</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Received a fish:",
          "content": "{\n \"success\": true,\n \"data\": {\n   ---DATA TRUNCATED---\n   \"armoire\": {\n     \"type\": \"food\",\n     \"dropKey\": \"Fish\",\n     \"dropArticle\": \"a \",\n     \"dropText\": \"Fish\"\n   }\n },",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageNotEnoughGold",
            "description": "<p>Not enough gold for the purchase</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotAuthorized Not enough gold",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not Enough Gold\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/buy-gear/:key",
    "title": "Buy a piece of gear",
    "name": "UserBuyGear",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The item to buy</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.items",
            "description": "<p>User's item inventory</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.flags",
            "description": "<p>User's flags</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.achievements",
            "description": "<p>User's achievements</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.stats",
            "description": "<p>User's current stats</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message, item purchased</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Purchased a warrior's wooden shield for example:",
          "content": "{\n  \"success\": true,\n  \"data\": {\n    ---TRUNCATED USER RECORD---\n  },\n  \"message\": \"Bought Wooden Shield\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageNotEnoughGold",
            "description": "<p>Not enough gold for the purchase</p>"
          },
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageAlreadyOwnGear",
            "description": "<p>Already own equipment</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "messageNotFound",
            "description": "<p>Item does not exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotAuthorized Already own",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"You already own that piece of equipment\"}",
          "type": "json"
        },
        {
          "title": "NotAuthorized Not enough gold",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not Enough Gold\"}",
          "type": "json"
        },
        {
          "title": "NotFound Item not found",
          "content": "{\"success\":false,\"error\":\"NotFound\",\"message\":\"Item \\\"weapon_misspelled_1\\\" not found.\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/buy-mystery-set/:key",
    "title": "Buy a mystery set",
    "name": "UserBuyMysterySet",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The mystery set to buy</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.items",
            "description": "<p>user.items</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.purchasedPlanConsecutive",
            "description": "<p>user.purchased.plan.consecutive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful purchase",
          "content": "{\n  \"success\": true,\n  \"data\": {\n    ---DATA TRUNCATED---\n  },\n  \"message\": \"Purchased an item set using a Mystic Hourglass!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "notEnoughHourglasses",
            "description": "<p>Not enough Mystic Hourglasses.</p>"
          },
          {
            "group": "400",
            "type": "NotFound",
            "optional": false,
            "field": "mysterySetNotFound",
            "description": "<p>Specified item does not exist or already owned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not enough hourglasses",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"You don't have enough Mystic Hourglasses.\"}",
          "type": "json"
        },
        {
          "title": "Already own, or doesn't exist",
          "content": "{\"success\":false,\"error\":\"NotFound\",\"message\":\"Mystery set not found, or set already owned.\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/buy-health-potion",
    "title": "Buy a health potion",
    "name": "UserBuyPotion",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>User's current stats</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n  \"success\": true,\n  \"data\": {\n    ---DATA TRUNCATED---\n  },\n  \"message\": \"Bought Health Potion\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageNotEnoughGold",
            "description": "<p>Not enough gold for the purchase</p>"
          },
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageHealthAlreadyMax",
            "description": "<p>Health is already full.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotAuthorized Not enough gold",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not Enough Gold\"}",
          "type": "json"
        },
        {
          "title": "NotAuthorized Already at max health",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"You already have maximum health.\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/buy-quest/:key",
    "title": "Buy a quest with gold",
    "name": "UserBuyQuest",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The quest scroll to buy</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.quests",
            "description": "<p>User's quest list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n  \"success\": true,\n  \"data\": {\n    --- DATA TRUNCATED---\n  },\n  \"message\": \"Bought Dilatory Distress, Part 1: Message in a Bottle\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotFound",
            "optional": false,
            "field": "questNotFound",
            "description": "<p>Specified quest does not exist</p>"
          },
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageNotEnoughGold",
            "description": "<p>Not enough gold for the purchase</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Quest chosen does not exist",
          "content": "{\"success\":false,\"error\":\"NotFound\",\"message\":\"Quest \\\"dilatoryDistress99\\\" not found.\"}",
          "type": "json"
        },
        {
          "title": "NotAuthorized Not enough gold",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not Enough Gold\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/buy-special-spell/:key",
    "title": "Buy special \"spell\" item",
    "description": "<p>Includes gift cards (e.g., birthday card), and avatar Transformation Items and their antidotes (e.g., Snowball item and Salt reward).</p>",
    "name": "UserBuySpecialSpell",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The special item to buy. Must be one of the keys from &quot;content.special&quot;, such as birthday, snowball, salt.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.stats",
            "description": "<p>User's current stats</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.items",
            "description": "<p>User's current inventory</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Purchased a greeting card:",
          "content": "{\n  \"success\": true,\n  \"data\": {\n  },\n  \"message\": \"Bought Greeting Card\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageNotEnoughGold",
            "description": "<p>Not enough gold for the purchase</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not enough gold",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not Enough Gold\"}",
          "type": "json"
        },
        {
          "title": "Item name not found",
          "content": "{\"success\":false,\"error\":\"NotFound\",\"message\":\"Skill \\\"happymardigras\\\" not found.\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/class/cast/:spellId",
    "title": "Cast a skill (spell) on a target",
    "name": "UserCast",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "fireball",
              "mpHeal",
              "earth",
              "frost",
              "smash",
              "defensiveStance",
              "valorousPresence",
              "intimidate",
              "pickPocket",
              "backStab",
              "toolsOfTrade",
              "stealth",
              "heal",
              "protectAura",
              "brightness",
              "healAll"
            ],
            "optional": false,
            "field": "spellId",
            "description": "<p>The skill to cast.</p>"
          }
        ],
        "Query Parameters": [
          {
            "group": "Query",
            "type": "UUID",
            "optional": false,
            "field": "targetId",
            "description": "<p>Query parameter, necessary if the spell is cast on a party member or task. Not used if the spell is case on the user or the user's current party.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Query example:",
          "content": "Cast \"Pickpocket\" on a task:\n https://habitica.com/api/v3/user/class/cast/pickPocket?targetId=fd427623...\n\nCast \"Tools of the Trade\" on the party:\n https://habitica.com/api/v3/user/class/cast/toolsOfTrade",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "data",
            "description": "<p>Will return the modified targets. For party members only the necessary fields will be populated. The user is always returned.</p>"
          }
        ]
      }
    },
    "description": "<p>Skill Key to Name Mapping Mage fireball: &quot;Burst of Flames&quot; mpheal: &quot;Ethereal Surge&quot; earth: &quot;Earthquake&quot; frost: &quot;Chilling Frost&quot;</p> <p>Warrior smash: &quot;Brutal Smash&quot; defensiveStance: &quot;Defensive Stance&quot; valorousPresence: &quot;Valorous Presence&quot; intimidate: &quot;Intimidating Gaze&quot;</p> <p>Rogue pickPocket: &quot;Pickpocket&quot; backStab: &quot;Backstab&quot; toolsOfTrade: &quot;Tools of the Trade&quot; stealth: &quot;Stealth&quot;</p> <p>Healer heal: &quot;Healing Light&quot; protectAura: &quot;Protective Aura&quot; brightness: &quot;Searing Brightness&quot; healAll: &quot;Blessing&quot;</p>",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Not",
            "description": "<p>enough mana.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>The specified task could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "PartyNotFound",
            "description": "<p>The user's party could not be found.</p>"
          },
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The specified user could not be found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/change-class",
    "title": "Change class",
    "description": "<p>User must be at least level 10. If ?class is defined and user.flags.classSelected is false it'll change the class. If user.preferences.disableClasses it'll enable classes, otherwise it sets user.flags.classSelected to false (costs 3 gems)</p>",
    "name": "UserChangeClass",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "class",
            "description": "<p>Query parameter - ?class={warrior|rogue|wizard|healer}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.flags",
            "description": "<p>user.flags</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.stats",
            "description": "<p>user.stats</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.preferences",
            "description": "<p>user.preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.items",
            "description": "<p>user.items</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Gems",
            "description": "<p>Not enough gems, if class was already selected and gems needed to be paid.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Level",
            "description": "<p>To change class you must be at least level 10.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not enough Gems\"}",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not enough Gems\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/v3/user",
    "title": "Delete an authenticated user's account",
    "name": "UserDelete",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user's password if the account uses local authentication</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>User's optional feedback explaining reasons for deletion</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result:",
          "content": " {\n  \"success\": true,\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "BadRequest",
            "optional": false,
            "field": "MissingPassword",
            "description": "<p>The password was not included in the request</p>"
          },
          {
            "group": "Error 4xx",
            "type": "BadRequest",
            "optional": false,
            "field": "LengthExceeded",
            "description": "<p>The feedback provided is longer than 10K</p>"
          },
          {
            "group": "Error 4xx",
            "type": "BadRequest",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>There is no account that uses those credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n  \"success\": false,\n  \"error\": \"BadRequest\",\n  \"message\": \"Invalid request parameters.\",\n  \"errors\": [\n    {\n      \"message\": \"Missing password.\",\n      \"param\": \"password\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/v3/user/auth/social/:network",
    "title": "Delete social authentication method",
    "description": "<p>Remove a social authentication method (only facebook supported) from a user profile. The user must have local authentication enabled</p>",
    "name": "UserDeleteSocial",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Empty object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/auth.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/disable-classes",
    "title": "Disable classes",
    "name": "UserDisableClasses",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.flags",
            "description": "<p>user.flags</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.stats",
            "description": "<p>user.stats</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.preferences",
            "description": "<p>user.preferences</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/equip/:type/:key",
    "title": "Equip an item",
    "name": "UserEquip",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"mount\"",
              "\"pet\"",
              "\"costume\"",
              "\"equipped\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of item to equip</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The item to equip</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example-URL",
          "content": "https://habitica.com/api/v3/user/equip/equipped/weapon_warrior_2",
          "type": "URL"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>user.items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Optional success message for unequipping an items</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n  \"success\": true,\n  \"data\": {---DATA TRUNCATED---},\n  \"message\": \"Training Sword unequipped.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotFound",
            "optional": false,
            "field": "notOwned",
            "description": "<p>Item is not in inventory, item doesn't exist, or item is of the wrong type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Item not owned or doesn't exist.",
          "content": "{\"success\":false,\"error\":\"NotFound\",\"message\":\"You do not own this item.\"}\n{\"success\":false,\"error\":\"NotFound\",\"message\":\"You do not own this pet.\"}\n{\"success\":false,\"error\":\"NotFound\",\"message\":\"You do not own this mount.\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/feed/:pet/:food",
    "title": "Feed a pet",
    "name": "UserFeed",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pet",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "food",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example-URL",
          "content": "https://habitica.com/api/v3/user/feed/Armadillo-Shade/Chocolate",
          "type": "url"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>The pet value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":true,\"data\":10,\"message\":\"Shade Armadillo really likes the Chocolate!\",\"notifications\":[]}",
          "content": "{\"success\":true,\"data\":10,\"message\":\"Shade Armadillo really likes the Chocolate!\",\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotFound",
            "optional": false,
            "field": "PetNotOwned",
            "description": "<p>:pet not found in user.items.pets</p>"
          },
          {
            "group": "Error 4xx",
            "type": "BedRequest",
            "optional": false,
            "field": "InvalidPet",
            "description": "<p>Invalid pet name supplied.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "NotFound",
            "optional": false,
            "field": "FoodNotOwned",
            "description": "<p>:food not found in user.items.food  Note: also sent if food name is invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/v3/user",
    "title": "Get the authenticated user's profile",
    "name": "UserGet",
    "group": "User",
    "description": "<p>The user profile contains data related to the authenticated user including (but not limited to); Achievements Authentications (including types and timestamps) Challenges Flags (including armoire, tutorial, tour etc...) Guilds History (including timestamps and values) Inbox (includes message history) Invitations (to parties/guilds) Items (character's full inventory) New Messages (flags for groups/guilds that have new messages) Notifications Party (includes current quest information) Preferences (user selected prefs) Profile (name, photo url, blurb) Purchased (includes purchase history, gem purchased items, plans) PushDevices (identifiers for mobile devices authorized) Stats (standard RPG stats, class, buffs, xp, etc..) Tags TasksOrder (list of all ids for dailys, habits, rewards and todos)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The user object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result:",
          "content": " {\n  \"success\": true,\n  \"data\": {\n  --  User data included here, for details of the user model see:\n  --  https://github.com/HabitRPG/habitica/tree/develop/website/server/models/user\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/v3/user/anonymized",
    "title": "Get anonymized user data",
    "name": "UserGetAnonymized",
    "group": "User",
    "description": "<p>Returns the user's data without: Authentication information NewMessages/Invitations/Inbox Profile Purchased information Contributor information Special items Webhooks</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.tasks",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/v3/user/inventory/buy",
    "title": "Get the gear items available for purchase for the authenticated user",
    "name": "UserGetBuyList",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"text\": \"Training Sword\",\n      \"notes\": \"Practice weapon. Confers no benefit.\",\n      \"value\": 1,\n      \"type\": \"weapon\",\n      \"key\": \"weapon_warrior_0\",\n      \"set\": \"warrior-0\",\n      \"klass\": \"warrior\",\n      \"index\": \"0\",\n      \"str\": 0,\n      \"int\": 0,\n      \"per\": 0,\n      \"con\": 0\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/hatch/:egg/:hatchingPotion",
    "title": "Hatch a pet",
    "name": "UserHatch",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "egg",
            "description": "<p>The egg to use</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hatchingPotion",
            "description": "<p>The hatching potion to use</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example-URL",
          "content": "https://habitica.com/api/v3/user/hatch/Dragon/CottonCandyPink",
          "type": "URL"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>user.items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Successfully hatched",
          "content": " {\n  \"success\": true,\n  \"data\": {},\n  \"message\": \"Your egg hatched! Visit your stable to equip your pet.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageAlreadyPet",
            "description": "<p>Already have the specific pet combination</p>"
          },
          {
            "group": "Error 4xx",
            "type": "NotFound",
            "optional": false,
            "field": "messageMissingEggPotion",
            "description": "<p>One or both of the ingrediants are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "NotFound",
            "optional": false,
            "field": "messageInvalidEggPotionCombo",
            "description": "<p>Cannot use that combination of egg and potion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Already have that pet.",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"You already have that pet. Try hatching a different combination",
          "type": "json"
        },
        {
          "title": "Either potion or egg (or both) not in inventory",
          "content": "{\"success\":false,\"error\":\"NotFound\",\"message\":\"You're missing either that egg or that potion\"}",
          "type": "json"
        },
        {
          "title": "Cannot use that combination",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"You can't hatch Quest Pet Eggs with Magic Hatching Potions! Try a different egg.\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/auth/local/login",
    "title": "Login",
    "description": "<p>Login a user with email / username and password</p>",
    "name": "UserLoginLocal",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Body parameter - Username or email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Body parameter - The user's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>The user's unique identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.apiToken",
            "description": "<p>The user's api token that must be used to authenticate requests.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.newUser",
            "description": "<p>Returns true if the user was just created (always false for local login).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/auth.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/open-mystery-item",
    "title": "Open the Mystery Item box",
    "name": "UserOpenMysteryItem",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The item obtained</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{ \"success\": true,",
          "content": "{ \"success\": true,\n  \"data\": {\n    \"mystery\": \"201612\",\n    \"value\": 0,\n    \"type\": \"armor\",\n    \"key\": \"armor_mystery_201612\",\n    \"set\": \"mystery-201612\",\n    \"klass\": \"mystery\",\n    \"index\": \"201612\",\n    \"str\": 0,\n    \"int\": 0,\n    \"per\": 0,\n    \"con\": 0\n  },\n  \"message\": \"Mystery item opened.\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "BadRequest",
            "optional": false,
            "field": "Empty",
            "description": "<p>No mystery items to open.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":false,\"error\":\"BadRequest\",\"message\":\"Mystery items are empty\"}",
          "content": "{\"success\":false,\"error\":\"BadRequest\",\"message\":\"Mystery items are empty\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/purchase/:type/:key",
    "title": "Purchase Gem or Gem-purchasable item",
    "name": "UserPurchase",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"gems\"",
              "\"eggs\"",
              "\"hatchingPotions\"",
              "\"premiumHatchingPotions\"",
              "\",\"",
              "\",\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Type of item to purchase.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Item's key (use &quot;gem&quot; for purchasing gems)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.items",
            "description": "<p>user.items</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.balance",
            "description": "<p>user.balance</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NotAvailable",
            "description": "<p>Item is not available to be purchased (not unlocked for the user).</p>"
          },
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Gems",
            "description": "<p>Not enough gems</p>"
          },
          {
            "group": "Error 4xx",
            "type": "NotFound",
            "optional": false,
            "field": "Key",
            "description": "<p>Key not found for Content type.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "NotFound",
            "optional": false,
            "field": "Type",
            "description": "<p>Type invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"This item is not currently available for purchase.\"}",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"This item is not currently available for purchase.\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/purchase-hourglass/:type/:key",
    "title": "Purchase Hourglass-purchasable item",
    "name": "UserPurchaseHourglass",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"pets\"",
              "\"mounts\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of item to purchase</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Ex: {Phoenix-Base}. The key for the mount/pet</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.items",
            "description": "<p>user.items</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.purchasedPlanConsecutive",
            "description": "<p>user.purchased.plan.consecutive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NotAvailable",
            "description": "<p>Item is not available to be purchased or is not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Hourglasses",
            "description": "<p>User does not have enough Mystic Hourglasses.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "NotFound",
            "optional": false,
            "field": "Type",
            "description": "<p>Type invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"You don't have enough Mystic Hourglasses.\"}",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"You don't have enough Mystic Hourglasses.\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/read-card/:cardType",
    "title": "Read a card",
    "name": "UserReadCard",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cardType",
            "description": "<p>Type of card to read (e.g. - birthday, greeting, nye, thankyou, valentine)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.specialItems",
            "description": "<p>user.items.special</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.cardReceived",
            "description": "<p>user.flags.cardReceived</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n  \"success\": true,\n  \"data\": {\n    \"specialItems\": {\n      \"snowball\": 0,\n      \"spookySparkles\": 0,\n      \"shinySeed\": 0,\n      \"seafoam\": 0,\n      \"valentine\": 0,\n      \"valentineReceived\": [],\n      \"nye\": 0,\n      \"nyeReceived\": [],\n      \"greeting\": 0,\n      \"greetingReceived\": [\n         \"MadPink\"\n          ],\n      \"thankyou\": 0,\n      \"thankyouReceived\": [],\n      \"birthday\": 0,\n      \"birthdayReceived\": []\n    },\n    \"cardReceived\": false\n  },\n  \"message\": \"valentine has been read\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "CardType",
            "description": "<p>Unknown card type.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/rebirth",
    "title": "Use Orb of Rebirth on user",
    "name": "UserRebirth",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.tasks",
            "description": "<p>User's modified tasks (no rewards)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n  \"success\": true,\n  \"data\": {\n  },\n  \"message\": \"You have been reborn!\"\n    {\n      \"type\": \"REBIRTH_ACHIEVEMENT\",\n      \"data\": {},\n      \"id\": \"424d69fa-3a6d-47db-96a4-6db42ed77a43\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Not",
            "description": "<p>enough gems</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not enough Gems\"}",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not enough Gems\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/auth/local/register",
    "title": "Register",
    "description": "<p>Register a new user with email, username and password or attach local auth to a social user</p>",
    "name": "UserRegisterLocal",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Body parameter - Username of the new user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Body parameter - Email address of the new user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Body parameter - Password for the new user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Body parameter - Password confirmation</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The user object, if local auth was just attached to a social user then only user.auth.local</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/auth.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/release-both",
    "title": "Release pets and mounts and grants Triad Bingo",
    "name": "UserReleaseBoth",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.achievements",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.items",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.balance",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n  \"success\": true,\n  \"data\": {\n    \"achievements\": {\n      \"ultimateGearSets\": {},\n      \"challenges\": [],\n      \"quests\": {},\n      \"perfect\": 0,\n      \"beastMaster\": true,\n      \"beastMasterCount\": 1,\n      \"mountMasterCount\": 1,\n      \"triadBingoCount\": 1,\n      \"mountMaster\": true,\n      \"triadBingo\": true\n    },\n    \"items\": {}\n  },\n  \"message\": \"Mounts and pets released\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Not",
            "description": "<p>enough gems</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not enough Gems\"}",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not enough Gems\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/release-mounts",
    "title": "Release mounts",
    "name": "UserReleaseMounts",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>user.items.mounts</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n  \"success\": true,\n  \"data\": {\n    },\n    \"items\": {}\n  },\n  \"message\": \"Mounts released\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Not",
            "description": "<p>enough gems</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not enough Gems\"}",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not enough Gems\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/reroll",
    "title": "Reroll a user using the Fortify Potion",
    "name": "UserReroll",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.tasks",
            "description": "<p>User's modified tasks (no rewards)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n  \"success\": true,\n  \"data\": {\n  },\n  \"message\": \"Fortify complete!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Not",
            "description": "<p>enough gems</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not enough Gems\"}",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Not enough Gems\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/reset",
    "title": "Reset user",
    "name": "UserReset",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.tasksToRemove",
            "description": "<p>IDs of removed tasks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n  \"success\": true,\n  \"data\": {--TRUNCATED--},\n    \"tasksToRemove\": [\n      \"ebb8748c-0565-431e-9036-b908da25c6b4\",\n      \"12a1cecf-68eb-40a7-b282-4f388c32124c\"\n    ]\n  },\n  \"message\": \"Reset complete!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/revive",
    "title": "Revive user from death",
    "name": "UserRevive",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>user.items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "NotDead",
            "description": "<p>Cannot revive player if player is not dead yet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Cannot revive if not dead\"}",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Cannot revive if not dead\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/sell/:type/:key?amount=1",
    "title": "Sell a gold-sellable item owned by the user",
    "name": "UserSell",
    "group": "User",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "String",
            "allowedValues": [
              "\"eggs\"",
              "\"hatchingPotions\"",
              "\"food\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of item to sell.</p>"
          },
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The key of the item</p>"
          }
        ],
        "Query) {Number} (optional": [
          {
            "group": "Query) {Number} (optional",
            "optional": false,
            "field": "amount",
            "description": "<p>The amount to sell</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.stats",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.items",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "NotFound",
            "optional": false,
            "field": "InvalidKey",
            "description": "<p>Key not found for user.items eggs (either the key does not exist or the user has none in inventory)</p>"
          },
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "InvalidType",
            "description": "<p>Type is not a valid type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Type is not sellable. Must be one of the following eggs, hatchingPotions, food\"}",
          "content": "{\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Type is not sellable. Must be one of the following eggs, hatchingPotions, food\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/sleep",
    "title": "Make the user start / stop sleeping (resting in the Inn)",
    "name": "UserSleep",
    "group": "User",
    "description": "<p>Toggles the sleep key under user preference true and false.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "data",
            "description": "<p>user.preferences.sleep</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Return-example",
          "content": "{\n  \"success\": true,\n  \"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/unlock",
    "title": "Unlock item or set of items by purchase",
    "name": "UserUnlock",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Query parameter. Full path to unlock. See &quot;content&quot; API call for list of items.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "curl -x POST http://habitica.com/api/v3/user/unlock?path=background.midnight_clouds",
          "content": "curl -x POST http://habitica.com/api/v3/user/unlock?path=background.midnight_clouds\ncurl -x POST http://habitica.com/api/v3/user/unlock?path=hair.color.midnight",
          "type": "curl"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.purchased",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.items",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.preferences",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Items have been unlocked&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n \"success\": true,\n \"data\": {},\n \"message\": \"Items have been unlocked\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "BadRequest",
            "optional": false,
            "field": "Path",
            "description": "<p>Path to unlock not specified</p>"
          },
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Gems",
            "description": "<p>Not enough gems available.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "NotAuthorized",
            "optional": false,
            "field": "Unlocked",
            "description": "<p>Full set already unlocked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":false,\"error\":\"BadRequest\",\"message\":\"Path string is required\"}",
          "content": "{\"success\":false,\"error\":\"BadRequest\",\"message\":\"Path string is required\"}\n 8 {\"success\":false,\"error\":\"NotAuthorized\",\"message\":\"Full set already unlocked.\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/v3/user",
    "title": "Update the user",
    "name": "UserUpdate",
    "group": "User",
    "description": "<p>Some of the user items can be updated, such as preferences, flags and stats. ^</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n  \"achievements.habitBirthdays\": 2,\n  \"profile.name\": \"MadPink\",\n  \"stats.hp\": 53,\n  \"flags.warnedLowHealth\":false,\n  \"preferences.allocationMode\":\"flat\",\n  \"preferences.hair.bangs\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated user object, the result is identical to the get user call</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "NotAuthorized",
            "optional": false,
            "field": "messageUserOperationProtected",
            "description": "<p>Returned if the change is not allowed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " {\n  \"success\": false,\n  \"error\": \"NotAuthorized\",\n  \"message\": \"path `stats.class` was not saved, as it's a protected path.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/v3/user/messages",
    "title": "Delete all messages",
    "name": "clearMessages",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>user.inbox.messages which should be empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":true,\"data\":{},\"notifications\":[]}",
          "content": "{\"success\":true,\"data\":{},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/v3/user/messages/:id",
    "title": "Delete a message",
    "name": "deleteMessage",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the message to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>user.inbox.messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n  \"success\": true,\n  \"data\": {\n    \"74d9a2e7-4c6e-4f3b-c3c4-517873f41592\": {\n      \"sort\": 0,\n      \"user\": \"MadPink\",\n      \"backer\": {},\n      \"contributor\": {},\n      \"uuid\": \"b0413351-405f-416f-9999-947ec1c85199\",\n      \"flagCount\": 0,\n      \"flags\": {},\n      \"likes\": {},\n      \"timestamp\": 1487276826704,\n      \"text\": \"Hi there!\",\n      \"id\": \"74d9a2e7-4c6e-4f3b-c3c4-517873f41592\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/mark-pms-read",
    "title": "Marks Private Messages as read",
    "name": "markPmsRead",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>user.inbox.messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":true,\"data\":[0,\"Your private messages have been marked as read\"],\"notifications\":[]}",
          "content": "{\"success\":true,\"data\":[0,\"Your private messages have been marked as read\"],\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/custom-day-start",
    "title": "Set preferences.dayStart for user",
    "name": "setCustomDayStart",
    "group": "User",
    "parameter": {
      "fields": {
        "Body Parameters": [
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "dayStart",
            "defaultValue": "0",
            "description": "<p>The hour number 0-23 for day to begin. If body is not included, will default to 0.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"dayStart\":2}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An empty Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":true,\"data\":{\"message\":\"Your custom day start has changed.\"},\"notifications\":[]}",
          "content": "{\"success\":true,\"data\":{\"message\":\"Your custom day start has changed.\"},\"notifications\":[]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "BadRequest",
            "optional": false,
            "field": "Validation",
            "description": "<p>Value provided is not a number, or is outside the range of 0-23</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{\"success\":false,\"error\":\"BadRequest\",\"message\":\"User validation failed\",\"errors\":[{\"message\":\"Path `preferences.dayStart` (25) is more than maximum allowed value (23).\",\"path\":\"preferences.dayStart\",\"value\":25}]}",
          "content": "{\"success\":false,\"error\":\"BadRequest\",\"message\":\"User validation failed\",\"errors\":[{\"message\":\"Path `preferences.dayStart` (25) is more than maximum allowed value (23).\",\"path\":\"preferences.dayStart\",\"value\":25}]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v3/user/webhook",
    "title": "Create a new webhook - BETA",
    "name": "AddWebhook",
    "group": "Webhook",
    "parameter": {
      "fields": {
        "Body Parameters": [
          {
            "group": "Body",
            "type": "UUID",
            "optional": true,
            "field": "id",
            "defaultValue": "Randomly Generated UUID",
            "description": "<p>The webhook's id</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The webhook's URL</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "label",
            "description": "<p>A label to remind you what this webhook does</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "enabled",
            "defaultValue": "true",
            "description": "<p>If the webhook should be enabled</p>"
          },
          {
            "group": "Body",
            "type": "Sring",
            "allowedValues": [
              "\"taskActivity\"",
              "\"groupChatReceived\""
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "taskActivity",
            "description": "<p>The webhook's type.</p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": true,
            "field": "options",
            "description": "<p>The webhook's options. Wil differ depending on type. Required for <code>groupChatReceived</code> type. If a webhook supports options, the default values are displayed in the examples below</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Task Activity Example",
          "content": "{\n  \"enabled\": true, // default\n  \"url\": \"http://some-webhook-url.com\",\n  \"label\": \"My Webhook\",\n  \"type\": \"taskActivity\", // default\n  \"options\": {\n    \"created\": false, // default\n    \"updated\": false, // default\n    \"deleted\": false, // default\n    \"scored\": true // default\n  }\n}",
          "type": "json"
        },
        {
          "title": "Group Chat Received Example",
          "content": "{\n  \"enabled\": true,\n  \"url\": \"http://some-webhook-url.com\",\n  \"label\": \"My Chat Webhook\",\n  \"type\": \"groupChatReceived\",\n  \"options\": {\n    \"groupId\": \"required-uuid-of-group\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Minimal Example",
          "content": "{\n  \"url\": \"http://some-webhook-url.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The created webhook</p>"
          },
          {
            "group": "201",
            "type": "UUID",
            "optional": false,
            "field": "data.id",
            "description": "<p>The uuid of the webhook</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>The url of the webhook</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.label",
            "description": "<p>A label for you to keep track of what this webhooks is for</p>"
          },
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "data.enabled",
            "description": "<p>Whether the webhook should be sent</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>The type of the webhook</p>"
          },
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "data.options",
            "description": "<p>The options for the webhook (See examples)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/webhook.js",
    "groupTitle": "Webhook",
    "groupDescription": "<p>Webhooks fire when a particular action is performed, such as updating a task, or sending a message in a group.</p> <p>Your user's configured webhooks are stored as an <code>Array</code> on the user object under the <code>webhooks</code> property.</p>",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "WebhookBodyInvalid",
            "description": "<p>A body parameter passed in the request did not pass validation.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/v3/user/webhook/:id",
    "title": "Delete a webhook - BETA",
    "name": "UserDeleteWebhook",
    "group": "Webhook",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the webhook to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>The remaining webhooks for the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/webhook.js",
    "groupTitle": "Webhook",
    "groupDescription": "<p>Webhooks fire when a particular action is performed, such as updating a task, or sending a message in a group.</p> <p>Your user's configured webhooks are stored as an <code>Array</code> on the user object under the <code>webhooks</code> property.</p>",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "WebhookNotFound",
            "description": "<p>The specified webhook could not be found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/api/v3/user/webhook/:id",
    "title": "Edit a webhook - BETA",
    "name": "UserUpdateWebhook",
    "group": "Webhook",
    "description": "<p>Can change <code>url</code>, <code>enabled</code>, <code>type</code>, and <code>options</code> properties. Cannot change <code>id</code>.</p>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>URL parameter - The id of the webhook to update</p>"
          }
        ],
        "Body Parameters": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>The webhook's URL</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "label",
            "description": "<p>A label to remind you what this webhook does</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "enabled",
            "description": "<p>If the webhook should be enabled</p>"
          },
          {
            "group": "Body",
            "type": "Sring",
            "allowedValues": [
              "\"taskActivity\"",
              "\"groupChatReceived\""
            ],
            "optional": true,
            "field": "type",
            "description": "<p>The webhook's type.</p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": true,
            "field": "options",
            "description": "<p>The webhook's options. Wil differ depending on type. The options are enumerated in the <a href=\"#api-Webhook-UserAddWebhook\">add webhook examples</a>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Update Enabled and Type Properties",
          "content": "{\n  \"enabled\": false,\n  \"type\": \"taskActivity\"\n}",
          "type": "json"
        },
        {
          "title": "Update Group Id for Group Chat Receieved Webhook",
          "content": "{\n  \"options\": {\n    \"groupId\": \"new-uuid-of-group\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The updated webhook</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "data.id",
            "description": "<p>The uuid of the webhook</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>The url of the webhook</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.label",
            "description": "<p>A label for you to keep track of what this webhooks is for</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.enabled",
            "description": "<p>Whether the webhook should be sent</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>The type of the webhook</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.options",
            "description": "<p>The options for the webhook (See webhook add examples)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "website/server/controllers/api-v3/webhook.js",
    "groupTitle": "Webhook",
    "groupDescription": "<p>Webhooks fire when a particular action is performed, such as updating a task, or sending a message in a group.</p> <p>Your user's configured webhooks are stored as an <code>Array</code> on the user object under the <code>webhooks</code> property.</p>",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "BadRequest",
            "optional": false,
            "field": "WebhookBodyInvalid",
            "description": "<p>A body parameter passed in the request did not pass validation.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "NotFound",
            "optional": false,
            "field": "WebhookNotFound",
            "description": "<p>The specified webhook could not be found.</p>"
          }
        ]
      }
    }
  }
] });
