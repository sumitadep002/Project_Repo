char ack = '0';
void setup{
  Serial.begin(9600);
  while(!Serial.available);
  ack = Serial.Read();
  delay(10);
  if(ack == '1')
  Serial.Write("Okay i got you");

}
void loop
{

  
}