
This example is a simple ghz circuit being sent to the IonQ Aria simulator. This was created just as an exercise using Javascript for no reason other then curiosity. 

The example we give in the docs uses curl and is far more sensible to do so... use that.  

See the IonQ Developer docs here:

- https://docs.ionq.com/guides/direct-api-submission

And get your API key per here:

- https://docs.ionq.com/guides/managing-api-keys

If you want to run this example then you have two ways to do so. The first example uses the API key hardcoded in the file, and the other uses an environment file that sits in the same folder as the scripts. This second example is closer to what we might do if we were building an application or sharing these resources across a team, where the abstraction of the (private) API key from the script is recommended.

It's also worth noting that we've taken a very simple curl example and added the joyous complexity of Javascript, so note that the npm installations will add packages like `node-fetch` and `dotenv` because... Javscript.

## Hardcoded version 

- check out the repo
- run `npm install` from the project root to install the packages required
- open the `submit_job_hardcoded.js` file
- find the `yourkeygoeshere` placeholder at the bottom of the file, replace it with your API key, and save
- run the script with `node submit_job_hardcoded.js`

Example output will look like the following.

```
Job submitted successfully: {
  id: '972fbb8f-88d1-468a-8cee-555a7b54d48a',
  status: 'ready',
  request: 1755188863,
  session_id: null
}
```


# Environment variable version

- check out the repo
- run `npm install` from the project root to install the packages required
- create a `.env` file in same folder as the scripts
- open the `.env` file and add the string `IONQ_API_KEY=yourkeygoeshere`
- replace the `yourkeygoeshere` with your API key and save
- run the script with `node submit_job_env.js`

Example output will look like the following.

```    
Job submitted successfully: {
  id: '80cccb86-579b-4258-94ba-d555f20cec07',
  status: 'ready',
  request: 1738155866,
  session_id: null
}
```
