# Description

A list of basic examples using [systemic](https://www.npmjs.com/package/systemic)


### Example-A

- system: _calculatorSystem_
  - component: _add_
  - component: _mulitply_

Running the system: `npm run a`

Note: in the related `index.js` we create then system and the use it after starting it.


### Example-B

- system: _calculatorSystem_
  - subsystem: _positiveOperations_
    - component: _add_
    - component: _mulitply_
  - subsystem: _negativeOperations_
    - component: _subtract_
    - component: _divide_

Running the system: `npm run b`

Note: in the related `index.js` we start the subsystems then create the system and then use it after starting it. Each one of the subsystem comes with an `index.js` files that acts as a manifest for that given subsystem, it tells us which component is the subsystem relying on.


### Example-C

- system: _calculatorSystem_
  - subsystem: _positiveOperations_
    - component: _add_
    - component: _mulitply_
  - subsystem: _negativeOperations_
    - component: _subtract_
    - component: _divide_

Running the system: `npm run c`

Note: in the related `index.js` we don't need to start the subsystems since we bootstrap them along with the system itself, all we have to do is starting the system after having it bootstrapped. 


### Example-D

- system: _calculatorSystem_
  - subsystem: _positiveOperations_
    - component: _add_
    - component: _mulitply_
  - subsystem: _negativeOperations_
    - component: _subtract_
    - component: _divide_

Running the system: `npm run d`

Note: it is extacly the same as the previuos example, we have only got ridden of the subsystems folders for a better folder structure, this is the recommended approach. 


### Example-E

- system: _exampleSystem_
  - subsystem: _config_
    - component: _config_
  - subsystem: _logger_
    - component: _logger_
  - subsystem: _mongo_
    - component: _mongo.primary_
    - component: _mongo.secondary_
    - the above components are actually the same one instantiated two times with two different configurations.

Running the system: `npm run e`

Note: here is where things start to look more like a real case scenario. We have dependency injection between components. The config is scoped. The mongo subsystem comes with two different components in order to manage the connection to two different mongos. The primary and secondary mongo component come with the stop function.


### Example-F

- system: _exampleSystem_
  - subsystem: _config_
    - component: _config_
  - subsystem: _logger_
    - component: _logger_
  - subsystem: _mongo_
    - component: _mongo.primary_
    - component: _mongo.secondary_
    - the above components are actually the same one instantiated two times with two different configurations.

Running the system: `npm run f`

Note: it is extacly the same as the previuos example, we have just used the [systemic-domain-runner](https://www.npmjs.com/package/systemic-domain-runner) to start the system. 