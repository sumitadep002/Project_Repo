
void setup()
{
  Serial.begin(9600);
  pinMode(A0,INPUT);
}

void loop()
{
  unsigned int AnalogValue;
  AnalogValue = analogRead(A0); //0 means A0 here
  Serial.println(AnalogValue);
  delay(1000);
}

