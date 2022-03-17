"use strict";(self.webpackChunk_uiw_react_codemirror=self.webpackChunk_uiw_react_codemirror||[]).push([[6583],{6583:function(r,n,t){t.r(n),n.default="FROM mono:3.12\r\n\r\nENV KRE_FEED https://www.myget.org/F/aspnetvnext/api/v2\r\nENV KRE_USER_HOME /opt/kre\r\n\r\nRUN apt-get -qq update && apt-get -qqy install unzip \r\n\r\nONBUILD RUN curl -sSL https://raw.githubusercontent.com/aspnet/Home/dev/kvminstall.sh | sh\r\nONBUILD RUN bash -c \"source $KRE_USER_HOME/kvm/kvm.sh \\\r\n    && kvm install latest -a default \\\r\n    && kvm alias default | xargs -i ln -s $KRE_USER_HOME/packages/{} $KRE_USER_HOME/packages/default\"\r\n\r\n# Install libuv for Kestrel from source code (binary is not in wheezy and one in jessie is still too old)\r\nRUN apt-get -qqy install \\\r\n    autoconf \\\r\n    automake \\\r\n    build-essential \\\r\n    libtool \r\nRUN LIBUV_VERSION=1.0.0-rc2 \\\r\n    && curl -sSL https://github.com/joyent/libuv/archive/v${LIBUV_VERSION}.tar.gz | tar zxfv - -C /usr/local/src \\\r\n    && cd /usr/local/src/libuv-$LIBUV_VERSION \\\r\n    && sh autogen.sh && ./configure && make && make install \\\r\n    && rm -rf /usr/local/src/libuv-$LIBUV_VERSION \\\r\n    && ldconfig\r\n\r\nENV PATH $PATH:$KRE_USER_HOME/packages/default/bin\r\n\r\n# Extra things to test\r\nRUN echo \"string at end\"\r\nRUN echo must work 'some str' and some more\r\nRUN echo hi this is # not a comment\r\nRUN echo 'String with ${VAR} and another $one here'"}}]);
//# sourceMappingURL=6583.b0f5a25c.chunk.js.map