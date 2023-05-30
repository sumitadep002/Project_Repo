uint8_t i=0;
char buff[50] = "rebgekjsvjsdfeffrferferferferferferfer";
void setup()
{
  Serial.begin(9600);

 

  
}
void loop(){
  if(Serial.available())
  {
 Serial.write(buff[i++]);
 delay(500);
 if(i=50)
 i=0;
  }
}