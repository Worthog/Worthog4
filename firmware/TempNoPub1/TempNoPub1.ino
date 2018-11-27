// This #include statement was automatically added by the Particle IDE. Click the + sign to insert libs.
//  #include "lib1.h"


// -----------------------------------------
// Function and Variable with tempsensor DOES NOT PUBLISH !!!
// -----------------------------------------
// In this example, we're going to register a Spark.variable() with the cloud so that we can read the temperature
// from the TMP36G sensor.
// We'll also register a Spark.function so that we can turn the LED on and off remotely.

// We're going to start by declaring which pins everything is plugged into.

int led0 = D0; // This is where your LED is plugged in. The other side goes to a resistor connected to GND.
int sw1  = D1; // this is a LED, to indicate a future switch/solenoid
int sw2  = D2; 
int sw3  = D3; 
int tempsensor = A5; // This is where your temp sensor is plugged in.


int tempvalue; // Here we are declaring the integer variable analogvalue


// Next we go into the setup function.

void setup() {

    // First, declare all of our pins. This lets our device know which ones will be used for outputting voltage, and which ones will read incoming voltage.
    pinMode(led0,OUTPUT); // Our LED pin is output (lighting up the LED)
    pinMode(sw1,OUTPUT); // Our switch/LED pin is output (lighting up the LED)
    pinMode(sw2,OUTPUT); // Our switch/LED pin is output (lighting up the LED)
    pinMode(sw3,OUTPUT); // Our switch/LED pin is output (lighting up the LED)
    pinMode(tempsensor,INPUT);  // Our tempsensor pin is input (reading the TMP36 tempsensor)


    // Declare a Spark.variable() here to access the value of the sensor from the cloud.
    Spark.variable("tempvalue", &tempvalue, INT);
    // This is saying that when we ask the cloud for "analogvalue", this will reference the variable analogvalue in this app, which is an integer variable.

    // We are also going to declare a Spark.function so that we can turn the LED on and off from the cloud.
    Spark.function("led",ledToggle);
    // This is saying that when we ask the cloud for the function "led", it will employ the function ledToggle() from this app.
    Spark.function("sw1", sw1Toggle);
    Spark.function("sw2", sw2Toggle);
    Spark.function("sw3", sw3Toggle);
    

}


// Next is the loop function...

void loop() {

    // check to see what the value of the photoresistor is and store it in the int variable analogvalue
    tempvalue = analogRead(tempsensor);

}


// Finally, we will write out our ledToggle function, which is referenced by the Spark.function() called "led"

int ledToggle(String command) {

    if (command=="on") {
        digitalWrite(led0,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(led0,LOW);
        return 0;
    }
    else {
        return -1;
    }

}


// Finally, we will write out our ledToggle function, which is referenced by the Spark.function() called "led"

int sw1Toggle(String command) {

    if (command=="on") {
        digitalWrite(sw1,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(sw1,LOW);
        return 0;
    }
    else {
        return -1;
    }

}

int sw2Toggle(String command) {

    if (command=="on") {
        digitalWrite(sw2,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(sw2,LOW);
        return 0;
    }
    else {
        return -1;
    }

}
int sw3Toggle(String command) {

    if (command=="on") {
        digitalWrite(sw3,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(sw3,LOW);
        return 0;
    }
    else {
        return -1;
    }

}

