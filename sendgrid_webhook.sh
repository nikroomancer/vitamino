function localtunnel {
  lt -s lksjgds8o24tlso --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
