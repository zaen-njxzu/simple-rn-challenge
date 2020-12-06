export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
rm -rf android/app/build
rm -rf android/app/src/main/res/drawable-*
cd android
./gradlew clean
cd ..
react-native bundle --platform android --dev true --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
cd android
./gradlew assembleDebug
cd ..

rm -rf ./apkOutput/debug
mkdir -p ./apkOutput/debug
cp -r ./android/app/build/outputs/apk/debug/. ./apkOutput/debug
rename "s/app/RnSimpleChallengeFlip/g" ./apkOutput/debug/*.apk

# If you plan to release, delete the 'drawable' folders, they create problem while producing .apk for release.
rm -rf ./android/app/src/main/res/drawable-*