rm -rf android/app/build
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
cd android
rm -rf app/src/main/res/drawable-*
rm -rf app/src/main/res/raw
rm -rf app/build/intermediates/res/merged/release/drawable-xxhdpi/*
ENVFILE=.env.production ./gradlew assembleRelease
cd ..

rm -rf ./apkOutput/release
mkdir -p ./apkOutput/release
cp -r ./android/app/build/outputs/apk/release/. ./apkOutput/release
rename "s/app/MasterTukarTambah/g" ./apkOutput/release/*.apk

# If you plan to release, delete the 'drawable' folders, they create problem while producing .apk for release.
rm -rf ./android/app/src/main/res/drawable-*
