///////////////////////
//Mission: PlaneSpotting
///////////////////////

/*
        __|__
---------(_)---------
    O  O       O  O

You have been hired by foreign officials to create a cloud function.
They have all the infratructure set up to host this function, and simply need you to export the functionality from this file

Project Brief:

"We're sorry we had to bring you back in, but you are our only hope. The fate of the world rests on your shoulders.
Intel suspects that Colonel Panic is at it again with a top secret weapon. The information we have on him is:

- His flight is departing from John Glenn International Airport in Ohio
- His flight number starts with the number 7
- We might be able to nail down his airline in the future, so the option to filter by an airline would be useful, but not necessary

We need an api that we can hit at any time to check any plane's that might fit these parameters.
We thank you for coming onboard."

- George Washington


//API Key
//fe5eb6a5eaf69b7f173457b94700fc3c
Documentation:
//https://aviationstack.com/documentation

API Requiments:
    -The function must take in a payload object, an example of which is provided below.
    -The function must return a promise that resolves to an array of strings.
        * Each array item should be a flight number
    -The project must use Typescript
    
    - Everything else is up to your interpretation of the problem described!
*/

const examplePayload = {
    airline: 'NetJets Aviation'
}

export default async () => {

}
