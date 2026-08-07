INSERT INTO bash (tit, term, body, tim) VALUES (
'read -r',
'bash',
'
while IFS= read -r r; do
echo "Line: $r"
done < "my.txt"
',
STRFTIME('%Y-%m-%d-%H-%M', 'now', '+9 hours')
);
