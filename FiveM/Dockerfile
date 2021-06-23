FROM debian:latest

WORKDIR /FiveM


RUN apt-get update \
    && apt-get install -y gnupg2 python3-pip && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get clean

RUN apt-get update \
    && apt-get install -y wget \
    && apt-get install -y git \
    && apt-get -y autoclean

RUN python3 -m pip install --upgrade pip cffi && \
    pip install --upgrade pywinrm && \
    rm -rf /root/.cache/pip 



RUN pip3 install beautifulsoup4
RUN pip3 install requests

COPY getLatestCFXBuild.py getLatestCFXBuild.py

RUN python3 /FiveM/getLatestCFXBuild.py

RUN tar xf /FiveM/fx.tar.xz -C /FiveM
RUN rm /FiveM/fx.tar.xz



EXPOSE 30120/tcp 30120/udp