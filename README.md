# PLANE SPOTTING


## Requirements
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

## Installation Prerequisites

- [node](https://nodejs.org/en/)


## Getting Started
1. Install dependencies.
```bash
$ npm install
```
2. Run in development mode.
```bash
$ npm run dev
```
3. Build for production.
```bash
$ npm run build
```
4. Run server.
```bash
$ npm run start
```
5. Make sure you are getting this in console.
````
➜  Mission-Planespotting git:(master) npm run dev

> mission-planespotting@1.0.0 dev
> ts-node-dev --respawn --pretty --transpile-only src/index.ts

[INFO] 14:04:41 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 4.7.4)
Listening on port 3000

````
6. You are good to go! :clap:

## Detailed Requests

1. Get all flights
```
curl http://localhost:3000/api/flights
```

```
➜  plane-tracker-master curl http://localhost:3000/api/flights
["4889","8851","334","2477","9056","5532","7932","6231","1214","1901","3277","7230","8427","7849","1775","2192","8832","3476","4892","8143","7327","346","122","1359","1602","652","732","722","173","579","332","187","6269","4122","1901","7073","3681","1925","3695","1905","7079","3697","8836","4275","8703","362","508","142","974","6952","6431","819","5431","46","1424","1638","3852","812","4695","6813","361","5326","4540","4498","3222","4524","5620","188","1587","1627","946","95","274","7952","201","207","5966","1707","8249","8530","7231","6792","3278","6274","692","7689","872","8729","4383","5862","7063","9867","6569","4029","1662","1662","7516","8097","5732","6933"]%
```

2. Get all flights departures from Columbus where airport is located
```
curl http://localhost:3000/api/flights?dep_iata=CMH
```
```
➜  plane-tracker-master curl http://localhost:3000/api/flights\?dep_iata\=CMH
["697","3455","2720",null,"1816","2414","6384","620","2991","3054","3454","6526","3521","4663","3725","3524","5624","5625","4497",null,"3090","6906","3336","1354","3667","1386","3467","6353","2110","1279","2336","2896","2617","4035","3522","6279","5300","2388","5557","3942","5799","2771","5803","7257","3345","6657","6242","6250","6253","4349","1844","5279","7907","4351","8554","4352","445","2418","3498","6745","1085","1622","5540","1703","4741","4580","5483","643","1077","1969","1443","2398","2800","767","4279","5159","4733","2459","6866","5618","6270","5649","4342","9249","3683","3984","7590","6727","2380","4210","2253","7157","3212","4596",null,"1407","5170","5011","2263",null]%
```

3. Get all flights departures from Columbus and number starts with 7
```
http://localhost:3000/api/flights?dep_iata=CMH&starts_with=7
```
```
➜  plane-tracker-master curl http://localhost:3000/api/flights\?dep_iata\=CMH\&starts_with\=7
["7907","7257","767","7590","7157"]%
```

4. Get all flights depatures from Columbus, number starts with 7 and airline is American Airline
```
http://localhost:3000/api/flights?dep_iata=CMH&starts_with=7&airline_name=American%20Airlines
```
```
➜  plane-tracker-master curl http://localhost:3000/api/flights\?dep_iata\=CMH\&starts_with\=7\&airline_name\=American%20Airlines
["7526","7526"]%
```

## Reference
- [Aviationstack Api documentation](https://aviationstack.com/documentation)
