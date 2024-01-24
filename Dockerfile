FROM ubuntu:22.04
ARG DEBIAN_FRONTEND=noninteractive
WORKDIR /app
RUN apt-get update && apt-get -y install android-tools-adb nodejs npm curl
RUN appium driver install uiautomator2
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
RUN source ~/.bashrc
RUN nvm install node