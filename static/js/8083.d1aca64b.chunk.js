"use strict";(self.webpackChunk_uiw_react_codemirror=self.webpackChunk_uiw_react_codemirror||[]).push([[8083],{8083:function(n,A,N){N.r(A),A.default="CONFIGURATION DefaultCfg\n    VAR_GLOBAL\n        Start_Stop AT %IX0.0: BOOL; (* This is a comment *)\n    END_VAR\n    TASK NewTask  (INTERVAL := T#20ms);\n    PROGRAM Main WITH NewTask : PLC_PRG;\nEND_CONFIGURATION\n\nPROGRAM demo\n    VAR_EXTERNAL\n        Start_Stop: BOOL;\n    END_VAR\n    VAR\n        a : REAL; // Another comment\n        todTest: TIME_OF_DAY := TOD#12:55;\n    END_VAR\n    a := csq(12.5);\n    TON1(IN := TRUE, PT := T#2s);\n    16#FAC0 2#1001_0110\n    IF TON1.Q AND a > REAL#100 THEN\n        Start_Stop := TRUE;\n    END_IF\nEND_PROGRAM;\n\n/* Get a square of the circle */\nFUNCTION csq : REAL\n    VAR_INPUT\n        r: REAL;\n    END_VAR\n    VAR CONSTANT\n        c_pi: REAL := 3.14;\n    END_VAR\n    csq := ABS(c_pi * (r * 2));\nEND_FUNCTION"}}]);
//# sourceMappingURL=8083.d1aca64b.chunk.js.map