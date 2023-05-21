char ack = '0';
char input_buffer[50];
char output_buffer[50];
int handshake(){

  while(!Serial.available());
  ack = Serial.read();
  delay(20);
  Serial.write("okay i got you");
  if(ack == '1')
  return 1;
  else
  return 0;
}
void setup()
{
  Serial.begin(9600);
}
void loop()
{
  handshake();
  
}