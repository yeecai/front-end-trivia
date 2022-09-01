git push

echo "------------begin with sit----------------"
git checkout sit
git pull --no-edit
git merge develop
git push
echo "------------end with sit----------------"


echo "------------begin with uat---------------"
git checkout uat
git pull --no-edit
git merge sit
git push
echo "------------end with uat---------------"
git checkout $1


if [["$2" = "master"] || ["$3" = "master"]] 
then
    echo "------------begin with master---------------"
    git checkout master
    git pull --no-edit
    git merge uat
    git push
    echo "------------end with master---------------"
fi
