module.exports = (plop) => {
  plop.addHelper('capitalize', function (text) {
     return text.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  });

  // We declare a new generator called "module"
  plop.setGenerator("create-component", {

    // Succintly describes what generator does.
    description: "Creating a new component",

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your module name?",
        validate: (val) => {
          if (!val) {
            return 'fileName cant be empty';
          }
          return true;
        }
      },
      {
        type: 'confirm',
        name: 'hooksNeeded',
        message: 'You need lifecycle hooks?'
      }
    ],

    // List of actions to take.
    // Here we "add" new files from our templates.
    actions: [
      {
        type: "add",
        path: "src/components/{{camelCase name}}/index.js",
        templateFile: "plop-templates/component.hbs"
      },

    ]

  });
  plop.setGenerator("create-container", {

    // Succintly describes what generator does.
    description: "Creating a container component",

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your container name?",
        validate: (val) => {
          if (!val) {
            return 'containerName cant be empty';
          }
          return true;
        }
      },
      {
        type: 'confirm',
        name: 'hooksNeeded',
        message: 'You need lifecycle hooks?'
      }
    ],

    // List of actions to take.
    // Here we "add" new files from our templates.
    actions: [
      {
        type: "add",
        path: "src/containers/{{capitalize name}}/index.js",
        templateFile: "plop-templates/component.hbs"
      }, {
        type: "add",
        path: "src/containers/{{capitalize name}}/api.js",
        templateFile: "plop-templates/api.hbs"
      },
      {
        type: "add",
        path: "src/containers/{{capitalize name}}/actions.js",
        templateFile: "plop-templates/actions.hbs"
      },
      {
        type: "add",
        path: "src/containers/{{capitalize name}}/constants.js",
        templateFile: "plop-templates/constants.hbs"
      },
      {
        type: "add",
        path: "src/containers/{{capitalize name}}/reducer.js",
        templateFile: "plop-templates/reducer.hbs"
      },
      {
        type: "add",
        path: "src/containers/{{capitalize name}}/saga.js",
        templateFile: "plop-templates/saga.hbs"
      },

    ]

  });

};