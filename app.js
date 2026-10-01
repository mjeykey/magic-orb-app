const orb = document.getElementById("orb");
const orbArt = document.getElementById("orbArt");
const answer = document.getElementById("answer");
const sparkLayer = document.getElementById("sparkLayer");
const thought = document.getElementById("thought");
const thoughtWrap = document.getElementById("thoughtWrap");
const hint = document.getElementById("hint");
const boxInputWrap = document.getElementById("boxInputWrap");
const boxSecret = document.getElementById("boxSecret");
const sealButton = document.getElementById("sealButton");
const secretNote = document.getElementById("secretNote");
const sealedMessage = document.getElementById("sealedMessage");

const ORB_IMAGE = orbArt.src;
const BOX_OPEN = "data:image/webp;base64,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";
const BOX_MESSAGE = "data:image/webp;base64,UklGRloYAABXRUJQVlA4IE4YAAAQWQCdASqgAKAAPtVaoE8oJaMiO30/aQAaiWgAxJQTrGeyQyTGR24/p9S+4055VxqfAf9R/TvEnyiRIcK/avqHeE+M3e78xNQvEz/b9rVvv++9BS1R1d/GHSN4FlAnybP+Hyqah39oUE9C2Ts+lVdBO213QK1wfvP78lN6ZoPd18abQ8+Lcf/iHbbxqU7wd9DQFj/X7vldZwqSgIAOy5JUN1Z5DX3jpW6kj0HHMTDkla1pPf7nO+wzdF/YGmuENLvjgXUbJb7edmt6jOO3zlBIPTNNuFFrhoIcmw1LcQsFx6gOyaNK/0w8xEiX0ssxf12zo4vnFTOLCWQseglLqZsEjG8bIKMTxAintmjyIbnDautZkOIS3fRs9kBY0Gd7eAhpuXtV/SuaDrsFiYVuLaAeYluI7QSBKCODQV3sjOtF7LmSLbRZyrJDMkPzd5tDXl91mFGkHTmmmNHEwTKRh5+Ek7e3JETRTGt/UrOE4t/meX7D+2l8RRcsCtiBWHiJUOFt/cW/vCkGtkTGrEYmDUFOfgmzCqBiO4GXKQRg/UjewI064oXwbavBj823kUg0YFLXJNayh3U/psSNAGOwDRT/nKCQ1+JLZPE+nK1/9UFMwuZ//qrEU6+rdw5EmS8t4+9aS7GsNHpId3rEPj0eLsgPGC7ckbuX1TIPYyCjuJ7WeWoIik/rDPZwS7RDnXIgzF27y/q8zdUqy2uQGs7xz7E71FrcWVoZBdv0QtgX6ocWydK0ZKNo04yzu5cUOhnU1L+S8Z+FKP+xUOj3ztVPo/+wdWutW2HtIly0kwiP8RvI0PnK/CI3tNjH8NRg7uyG5DsIO0O3xVwFWOd6jU9ee1aFpVsWj996VSPc03LutoT4e79y3ITyN8X9eGfZWwMP40TKKsWtn8ESty4HpOWTx/cjimOZu+RwcQHdTdA6x765iuNiv3OeSsR09o11v59jvPgAANE15SD7gBFDFx6KO1YJ+ug81tjfgA1UWXjGgkKbyrdPbcKKszJv2jm+KvqlUfd9FNMDR4DYXTWI59fMFm2qj3JTHTjfoz+qb2LutB0C6O65r1ueSZ59E+3fflgW/kQ8y4oloR7OI4s5fox3FvWQ+ldu7lUXko/cbHs2yIeS4ozH+7Aa1+Ih7AuqWnpT/Y1GhKxAEhNg7rFaMfXl+1rxmvPf6jEL6xmbqf2SRVCj/QFFe4JhMCo63mV/FZzDNPRGyHbvTzkE2Iolu8m9L7kYaaSZ2KJk8Ct++PeY/WU0+EebD9F/sTbTwjG6RQWc/zBUFzBBkNN2M2lt0JR1qjMm/4hCSP+XYnvmhv5EAlEVIR9szwKyAciRFEnE6j8DxlfYPWZ0JuMZEJoIlzCvUzAJehijy1rdv4pgC43JD3441sTp1BZ2+MWXdR0GsE+P4Y4kGnQZpK7SJvnohAHGWUNPUjIBnNiloQFSka3sCEzu1KB7i3JIaDxgP13AGlOnefHAVf3ZSx3tS0y8u1gviUcLjGeKMBZrPqqtJthWGorkjoeS9z2ZqwKvZUikuf2V24z4t1Ve6wZ4hstVBl0Gv3SJuasjVVLwAOw00izWJG3UajE/sh4O2AEYzlcLjfCwfcumyLmbmBbgVzhySydgwqHM43ZB3G8Ta4WTiMOmQGHN1jbfSah9x71vRgX3ftiMUSPBOT+3wICFN6tIRKpI73MB4c4ApAKE3B+nxiEK9Ru+twZD3wXbNrz6gauuP6DGaxoU/V+rcLyfcf1SRq1+pdTYWsoQpVnywtpCgVT4x4WeX+3BNOS3Hjv6ZTGPAieeGTtMIfR2iBEUtOwzkk7Q/8jKdIRrGyE1OhU/+V8d9lcQ4b6LbYXbECfe0Og6o/6CRoOelE9L08Pge4qAn9rqBBmh3UKz5nOsB6tnnt41oO04LhMaHhYlCV9L4gpQ0ge7QlCcvGasQIHToz2cLmAoMil47FolJ5nLU822f6ZlBGq2zyCiJ9u6bTF7OVeVJHEuhTDYSQ+e2uohahFCISDeipvhcTVhnO0ZPT9U9xfd8bSiRWn1ATUAWjZfA8zfbf1vX9Q8w95RipIaU1lWqJmz7DhJSc5Adj7CmrMalzcfRpOhr8z8d+8OwhxioobwwH0uZ0RMqi8H1784aUWzMiw4hyIsdrdwCGs5XiwXCrcmEvtX17tvbxCHcItfJn74C2W24YtEy4QgGtfpYgxcUhmzsfCntm3ywhkkZ/qToHtz+9v6DO+1hnNZ3b5z54UM6lddhh+LoYu6bYMQ2+3PMykzqAYq6ShbNaJm73X7ZoFzARdPsu4+pDMDloEjiJsvorcFoVgG3+ExY92TWFlUCcsES3ZqJdndG57IMmkD+ouSoh3icCmlxUVDUPhkTy/VdH/8CzBp4d6uGQZ58mozhzrG/NpGr0OyguIkA11mwO4NE/tRrRzirKjM3fLifCef6V9CQcueIETFRXYPnk61iodEaUhuQKkfjWSv8zsKBQHcbAI7JYQ9qcxSBcuv4EqJ67SG33Ot3+Zh3X/vBuISx0Ny3ilzxym06QVTXODh5CaJpYdsUOX51B+uWsUUPQ2UHpzGsiaF1rDZFDfR312Etm5lnRrAaLm343bs4iR+B1iIFgOpxi4t1aXr5Ap9qsVgM1j6ZwcB+4WlBL3YIPH3RMwHVq4ieM5e4j3+mD/wSAozZipRo45Zps9LYioJ4Cko9heHZMpXFnMW0WEU//3W1HBNumzC7TklrwTahgYvPEXhzyFJbfNBviTci7J6APmE9J9d8ukGFIJHvxEnP1P1gstYxh+q5mQFOzdupkXYR+J/uQYwMrUdYxJnVP2u6xE2jH4fhFJh+8YupFcb+7uVD+Js51JGRxmAcfRQOISS5aRBqMEybKlKOd7Yh8F5yX6NHwfVqSpaPOz94vMR33i4wa5RS1Z/5oyCMvwCuWwc4Q/ymVmOsko8GsTgg3W/wDwQRlYepsVJyxhfiPF7JQ9WlKRjBi9X+an0zCn7iKaCCq9naJFFfv/mYB4v8+4RKeGkELEzF7Vcgs868euQWZS25HS3fVBmqXRFZx8ToJCVZjVKtHkyDHagbg39Pcmio1epdOFXrAP+/YyO/T4TEBo/9YXEtYV20CbAZ5dQ9BDggd1W34No/5rPRwoKRDvZxafBveI8+adYWh4x1HiSEDCj4RlsRoxvodsCHBikXJrJJOy2nM18DYOEAgclAVr0aVQpzHebd/v8ESzQVM1CIsvpmCZzaT3SLVsrt+JQbeIfyt9oNksIvBmAeUcMd7RUZUq1TMaCHNSetBWLnPb97BRqXmFM/z0XSABlM4IuD87YTdVYRve2UiXf9SlKjBMtXhve4ZSadqEDe46j4Ym11wykmD2EJnQUvlL1Y1iPQ0S8pwrtZbED/vd0q1jR+vpl6G7xfvKdULYK0h4mMFe8pOvy1MLSqXN7PbR5mf3CyuFx+kaU7naM6yqthlhZLTJCqqXIypmzSO8zHsj/dzOAc7bFxh2tY5DDhk/rVcKia7uu+33paJh1/YQJAu+frJVKv6we8nhzgHmWUiSwxT8MAvn21ifeykIGwppZUqCOBd6PR5ow8jGUUKFL8SpGOxWvfnd8XU3kLA7kNiu6+kO8pj2fJTKom2VJB3XCgHAPRBOchWJXMR2eKJmhNXnLfcJPAyli3j84BbmBenBsAc256f6faJMmXGdr1uDLCxk8qoGB6VDKUXGYkE9c1RNZAw/ptAym7l2Xyw0mKoM8tPKuLzptTxeIaisqUEXu+o7x2Yd3Ath5xuMe1MNCgYZBzkna9PAmXV4+efaeGHS/8bZGz68y7rNvuve+fla5G6kA1TDZ6Q4pN9Jko+FKKHcSJW1zr7kTTTviTladGgrKjgE/5pSxQvTlzc/vC10OzU+SbYK4m9Z1c4f4bWm0yXlEMaaiBpMwCqLmoh0W6b09gsTmbwZqJhLmQ05VgWQtDLg60qd9DQi/pjzIsSigStS4n6MlQ/B8bf5t0dIsOlOawrlxfdLH9xqrRvL+fQDB2I/G+yRiDLATZlRx+b0Y5EHp283M638sFMUHJKSRFjT2D4HCu+oCQ61xQv/9BwkGHWWqaVrhlycSrTO1s/QEgKvkpnv2bjLLaGA31PAmVn598/KpSqUZOTNCa9UBzKIQ2y+EDer0jjZPvTp384Mgzx1YFUnIJqgiKN0bCv/CICg3WEgs/YcoAD3iPTihjHiGMuY8TEYzvyJVF4ftEjrRolkW9wqR6rbL/aXlIZrS/bhPK68Yii1MGaBY/dy4l9UVGpVoXhAD68dD8bKhbKH5lGpBt7Il4bwKl/tQbU6Lfu9VVfnb1y+P/5KfHJYn+suNPXuUTQQJRCVET9AyJ1Znijz2bu1pA3KBq+Iz1GKjyc4PJyLLjSQ6SP2BL0esA13+4IDOSVZr8TxVWqL+plE9iF2IBUGomKpk3cRtOT31swZyB7a2KqM+iDAlkiA8wQT5PqBLj+m+C12eQTSteogHoRytmfIMbljUhWFPWVaz4IF8g2ai3SS0eMS2+IpdK1rGJwzMP6GjH/Y5+bbaEAXLO6QchlCT/9f3chvxegoAQMx1MbmMeYq0BGEAXt+LMTNW6NPkc2S0elbYrbKKGIQ0QBflfsxiHG4tbvhsG4ijOpvxp8rLdVvI6AGNMu3XCNPnrRd7u7CwZyltkE0Dv57/kv3EI3EspbVwiWdiDdH5sQilPTAGwsFNyqj7Ti2qpCR1yAqWf0aVbh0KYfYf7boyVSkJpG//FFFISFdM3EC4ofEE9pmcLU5bzxAFush5zje+Id1PZzky+yd/eaw5vcr2L1FHfvHSeBdc1WkIB4qoH3vPhdjshnOU4Ae0WYsietKKg565u2LHLC3pH5ZKLDt/HROclQ2eqN8uxQKbY5FYPfQ0mZO8qhAwS88YYxczPNR1zP2OjnAGF7mJxB0RZXPpCBy8huxbw+xmEajDwu4J66EH30Xak+nzHIYpieV38OJMYXLDjlatBQ5o6v/vsaYMVf0WPvbejM9nokI2bD8vwx7qpJ3eYO9rAYaxrX7QYE/Ima80Alq/RQjVUeanLqm9ItcUwYtVtJsoc8HEpNF9sBe14Xf/4NdZSQkNK5Cm7Z66YSO+hf4jphOl1II4KsE3O6C1+Ly7IH/rHnXBJ6D0Yzd/2D3gOAjzZjD6yOyno3tgTz52jxZDzRwepxyF5464gNliVNMfr68aC3t/BS5uffIwwTKzVEborXNbDm8C1mcC4vWUBWtsJXf7gvwKoueKeRUi4DYBRLL0bxD5tvybVSyXxbUd4lRvJxb5xMk3M/yyK1SDkx+xwaYmCdfuJVVeyPZp2Zt0w2pynvN4ZT7mE5rbEADciPfOBllXjuh2RYa0SQi7fPw5uBJJdyTn9/R5tkh1ozLbBX4Jy7qmKIMEeScXPq0JGLADuK1q2ALO9r/rgvq4gZsFGr495IDy6V6QTadj3EQuz2LIeMKEc/Fd91Qp81yW1LSfU7fzFPUVJdLsIl9FvSwX5EDadTl+tcJohPbSP7T9rIcCR9gKUWvo565u8Mewcektfv/xKbA/Uate99pxtHp02FY0N53aEbNNyStUIpj71GLLMWoVwapIaUDmJyPsRuwm84foHiHLAVaz2dGjj+hppLt+YbPSMwTxbrAure2o/Kl1uUfbDNzLqOza1zsGmuQDXFFj8WaILYxtyesVv5JpkwN9ogSF5B/YbEgZEoVlqog3DPIQDOGI5w4Bp7FcwIN0c+bjiyVjCYFdY+i6YV84eCCUhzqPEWregCdh1vYC0T1O35sDSxtalmgoPmXfF4PF5rYKRKYTH2zRv58AN2G5ch2ixHR1MoLZvYXwnI2U0KHyB4LE9ZZwkqL2/kZi/YQLDLDBI1zNVQtPmh4vQUTLVuwAQGpTTD/zp6fnCZSyLlpiPmxfD2zWAroM/yfB9QI/Ge2e/IEhi38uV9B26azhsZq1QNFbelOa+8bcVJ9APhQKMUKBYZOooH90EJwDIglnN822ChANHEwWICCU2EVGmiUDtdzyYS5kdyrYuL/Op7lNaS/Ac1QSyIEK47bAKZeQ7qmKfT7eJrmvagp1D9nwxB8Kk2KapvWVAa2OmHLc7rv7us7BeaDgLj96Ve0nL/jcqwY8wa85J77Qxgu0+pjtwaZoJ8RjJ1Lx6B/ZHyof8kfMNPc0SWpmoU7XNlzlVBXGjUjTn0JZtFxFg9GGF//ykqp+Zw1b9hRd4GasA7FjF1Hzk5yT3Cx1XmurbI29Mzj4JcRkJ/y849T+OHtRoWVzfQIhYblBGXMvg5R04WevFpbLh8JmF6HlapuprGOLJ4Iu8CaRkFz7oUVa65CKvfOiQGECB0S7sDVxqQyx3R62juLgn8SSZwwNzMPYS9IaAKd+DKMHYAmDcb3RvKAMmzVC6gA7wzlndOVHJ1kpzIgI2v4gWpFP/mQNpqD62Y1kaVTe7xZnuZZiuHtCeWACJZbNEmIjYTKejJDLeZXMjwZ2u29dIt/ZHxCayrgt+bUqMN6EwzVnQSbkgaw1XR3uSLPMrZfwiwCZ0hnDmHH5xCbAC4BmdqaVdDG/o9X+86pi6qRWUnh9ihYAwjFTwZEOanWbIQKiK+L9yod4Xo1CF7s+1YQHg9OPwempwBVEgYfhLSr/yABp4PkZIAkWQp1Tc0I87qCAI+15JufskFthyHjsYteWUkER5UxcwVgW685Rz+0gUr84R6lc5toqwPkwU+ZW9PDealzfTu4J95UnFjVcgYKjSntFoMvf+3jKeacAUQf1q+1xTQbsS2Wd+6WM1GXk7EDdpg+Cd5nmXRIRp5AAOrvaeGT+J98wAFhhin0Pl0c5lJKXgiyzTi+szzUcXGJoYkDDGvdtgGHiBpYkTmTk5Yrr28d49kF1OwEd4Fy5H9gv1pBSKjufgL7hIwN4h0jzyCk3c0jomeaNkNK1WcE7pkHxQ++kfaPUA9MBy/kre5BwHFDwG0bE5QYEzTbdDgUc2UBHPU1hhEo/lvVuXFJGDBwODZagweqTL6UNZPOyzD6a0bbuN5isKBhlvsUhHXnCexkADsL7IjnZr5NjrSQ2wvqZ1jRR8lOltmjYQYWCQbciMANRM0g0TOv3gW91GdKMM22wIsv8oqthBmuvuFtqjJW2MAdENNwgPSn2YP6Te/W34YsPzvsOoDhZUUKaB2qnzY73C+8VkRyDYpu18L3r8aq6DcTDIlGMXtNIyKbHj1xczaPm/clYOrR1aCW0CbHgR9DKVGXT6mG3RHkwrDzo3QcAti6Wr1yRYtJIt1OwOuxnXfxNqXwsNqH1/MxBjDCgUd3obvQ+dg68KxNpVHPx5BZMb+vtodeUlfjZM4H9TRzOFZchDkpN6jo3xT2toVMPK1YNdaEEB0a4OX0+Eet95qRRaL7CjQzC7Sj0DFT53Iy8oh4ykr+eRnYhsvTnfThMYxfZ91hMh8vn07zewQE5GeroCRTiearU4MfTG02c7oLhCSrW+1taKB0AU8d5q3naDjOQBdUQlyAPVfH2VsEDK4/t1pIeezLPOLDwAQ0iQpyplpICn1HrOyUdlXFzl7zL/AooepJfZZADBZXUdZ8oSmaxkVTkjFJ1DXX35L6UEKcxRYFrnhobuG71larflfFl/OMkj7TOhYLs7pjBnpv9XDXgZDTSf5apwvUOqKTNUaRvFxq8KXeGRJX/eKGWvj2mxGetjeqCCbhXatCo/tc6axhRQmer/kFIE92oYMJ+Kc3ODMirW07Msyo3bW4nAhh4AOKUZdjh+sqyJpmhjc+SnArv5vn1hUBu8PUZBOcVuexmGyWcq6Cz+nU4wEFz+Sk9G1WmZdg2ImYU6YpQzJWEqaOpP4UMiXyhapu1JOoOM/mwxCIQVeM+vtwYS0ife/p5/avJ/tSRwJt6zgG6qAZ/MdTp92nz1Nu2QOen6LMsNBL1G+xKMqxk44gCWwIzBrHqMepJnsXkgWwvKuuUNB/jSh3JVlJSm8MXb6oOw/+wzmBmLSsHqDuLxOb+Cp+i5HGcWVY39DEve+ToUvGdPUFFZVjKUv7nGV1srh3kxI1t/36VnzXzsB8jSL6hcZxl2SZUaBknZCw+x4ItSNNU0TgnSXklvTdHRGHaptztzXI6v4ou9MKDxkgRFGOBfBOwoSQLjoez9DnKPpdmoHAF2kuV1igdYA2SJMDvTvP1t0uU2IM4FDgFkeNVDfI7GmTu+XRmhxaX9KvMXeh5Ge4ux+Hhha8zAxsi9FNP7O4nx8SXk8Tfoy04wQ7S151BJihqwZtH6VvfgvaFgBFHm/gLFVhwT6vy+mAeQyafeK3cb+TpynwPApb+hYG5MI8qAvNy9zEAWoSwAAA=";
const LOCK_IMAGE = "data:image/webp;base64,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";

const reflectionLines = [
  "Für heute hast du deine Nachricht der Kugel erhalten.",
  "Nun denke darüber nach.",
  "Lass sie nach innen sinken.",
  "Wenn du die Antwort in dir hörst, schreib sie hier auf."
];

const FIRST_ANSWER_VISIBLE_MS = 9500;
const REFLECTION_START_DELAY_MS = 10500;
const REFLECTION_LINE_GAP_MS = 5200;
const BOX_OPEN_EXTRA_DELAY_MS = 2600;

const boxOpenSound = new Audio("assets/door-open-86191.mp3?v=20260928-2305");
const orbLoadingSound = new Audio("assets/magic-wand-loading.mp3?v=20260929-0949");
const reflectionLoadingSound = new Audio("assets/magic-ascend-reflection.mp3?v=20260929-1020");
reflectionLoadingSound.preload = "auto";
reflectionLoadingSound.volume = 0.88;
orbLoadingSound.preload = "auto";
orbLoadingSound.volume = 0.9;
const boxCloseSound = new Audio("data:audio/mpeg;base64,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HgHkVpu4Nu3/8yjEIRRRHlgfmzgAJBzyA8E4+o2hQJHG7LRTrO5+h21KTiB+nZvHycmODH/AmXbs7lmiGn6HfTOdP//kFQEIJQgAA3OuQpj/8yjECgyg7ogXmBAAuqq0mDqelqwuxlv88/f6/Zm/egcAqjt1sZBVXytxz+FX3//R2U//rpVNsxdbOXIxEUGLEos4GEiRMFP/8yjEEhEw4kAB2zAAL3ZWqVQBh2Lo3KWUU1DEZDG9W7uuBsdWf759brMzL6ZGZ2jURKCrjcOzpI6pKP63f/+5mTBhsz/LNyj/8yjECA6BAkAA28YwstGIwEEocsyCNBtMmisWGV7EesOnR3cvB+WaIVczzehwMDdAAAF5LboIA3ueQP/sZ5m+ZEgF+h/JA1f/8yjECQzxBkAA1kwMagZwrBnYjrY0hX1q0qaJAsqClvH0iVuXl/fVf/5UU76ChKPeUf+1HGy6VVUzZXDFwiI0yjTIpaI/SPP/8yjEEAswgjQA1lIISwKwwXLUdNFVnu1HuSkhUki5UrbvKwZRTbRr3aWTGr6H3zh3ZkJmZg4MmalXdt3p+BZphSM7AQcRcdH/8yjEHgswciwA1kYMhA5Y7i5ixHd///+X/0+lJAUyYsMFqhg5MAvGsZuKn0IyqgIZIJuQEAqowJByrVBpbXG1ZS++70pWwGv/8yjELAooSiwA3hIEI/Ks+JUWEixBB9qUTIAgvAMo/tThlFrG641BsogpS+eVcDOqOv3V9v7f/+v/R/oqZkY4DHEOJ0wrssv/8yjEPgyQeiQA0ZBAX0gFkgk4Ik2OZultJHAzEtyaEOYKo1ffd//+7///62UGzxHBpGFiEC41gYFXqISRtIU3XcAXArPQVW3/8yjERgqAUigA3owE2qolXMZRzN3+uP2f//+T9PsT9FUFJttyOScPSAAI5JVbENapFanr9aVzfuoo1e1mHLaFYv06KLCdQs//8yjEVwvISiAA1hIEp3+tHV//W8frlrLgYVA2myAVJPU2rTLVs1g4RTQDph+VW4NFXKDpUYdTnX8iW/3HslqM9nUqdEGAzEz/8yjEYgwAHjUee8IAaSEnoki0EjW2jSrROdVRyZYahiIyPZ/QFGgUiCxEBNAoo//6maBQ1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//MwxPsXomn8DNPGBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//MyxN0O8E4AFILMAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zMMTjDOBlZABKTChVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==");
boxCloseSound.preload = "auto";
boxCloseSound.volume = 0.95;
let boxCloseSoundUnlocked = false;
boxOpenSound.preload = "auto";
boxOpenSound.volume = 0.92;
let boxSoundUnlocked = false;

function unlockBoxOpenSound(){
  if(boxSoundUnlocked) return;
  const previousVolume = boxOpenSound.volume;
  boxOpenSound.volume = 0;
  const attempt = boxOpenSound.play();
  if(attempt && typeof attempt.then === "function"){
    attempt.then(()=>{
      boxOpenSound.pause();
      boxOpenSound.currentTime = 0;
      boxOpenSound.volume = previousVolume;
      boxSoundUnlocked = true;
    }).catch(()=>{
      boxOpenSound.volume = previousVolume;
    });
  } else {
    boxOpenSound.volume = previousVolume;
  }
}

function playReflectionLoadingSound(){
  try{
    reflectionLoadingSound.currentTime=0;
    reflectionLoadingSound.volume=0.88;
    reflectionLoadingSound.play().catch(()=>{});
  }catch{}
}

function playOrbLoadingSound(){
  try{
    orbLoadingSound.currentTime=0;
    orbLoadingSound.volume=0.9;
    orbLoadingSound.play().catch(()=>{});
  }catch{}
}

function playBoxOpenSound(){
  try{
    boxOpenSound.currentTime = 0;
    boxOpenSound.volume = 0.92;
    const attempt = boxOpenSound.play();
    if(attempt && typeof attempt.catch === "function"){
      attempt.catch(()=>playCreak());
    }
  }catch{
    playCreak();
  }
}

function unlockBoxCloseSound(){
  if(boxCloseSoundUnlocked) return;
  const previousVolume = boxCloseSound.volume;
  boxCloseSound.volume = 0;
  const attempt = boxCloseSound.play();
  if(attempt && typeof attempt.then === "function"){
    attempt.then(()=>{
      boxCloseSound.pause();
      boxCloseSound.currentTime = 0;
      boxCloseSound.volume = previousVolume;
      boxCloseSoundUnlocked = true;
    }).catch(()=>{
      boxCloseSound.volume = previousVolume;
    });
  } else {
    boxCloseSound.volume = previousVolume;
  }
}

function playBoxCloseSound(){
  try{
    boxCloseSound.pause();
    boxCloseSound.currentTime = 0;
    boxCloseSound.volume = 1;
    const attempt = boxCloseSound.play();
    if(attempt && typeof attempt.catch === "function"){
      attempt.catch(()=>{
        setTimeout(()=>{
          try{
            boxCloseSound.currentTime = 0;
            boxCloseSound.play().catch(()=>{});
          }catch{}
        },80);
      });
    }
  }catch{}
}

let ritualTimers = [];
let audioContext = null;

const responses = {
  heartbreak: [
    "Du vermisst vielleicht nicht nur den Menschen, sondern auch die Zukunft, die du mit ihm gesehen hast.",
    "Erinnerung ist kein Auftrag zur Rückkehr.",
    "Was weh tut, muss nicht wieder in dein Leben.",
    "Liebe kann echt gewesen sein und trotzdem nicht mehr richtig sein.",
    "Dein Herz darf langsamer loslassen als dein Kopf.",
    "Nicht jede Sehnsucht will erfüllt werden. Manche will nur gehört werden.",
    "Vielleicht trauerst du auch um das, was nie passieren wird.",
    "Ein schöner Anfang garantiert kein gutes Ende.",
    "Vermissen beweist Nähe von gestern, nicht Passung für morgen.",
    "Manche Menschen fehlen, obwohl Abstand trotzdem richtig ist.",
    "Du musst die guten Erinnerungen nicht zerstören, um weiterzugehen.",
    "Was vorbei ist, darf wichtig bleiben, ohne zurückzukommen.",
    "Manchmal beginnt Heilung, wenn du aufhörst, auf ein anderes Ende zu warten.",
    "Ein Teil von dir kann noch lieben und trotzdem gehen.",
    "Vielleicht fehlt dir gerade Hoffnung mehr als die Person selbst.",
    "Dein Herz sucht Gewohntes oft länger, als dein Leben es braucht.",
    "Nicht jede offene Frage braucht noch eine Antwort von diesem Menschen.",
    "Es gibt Abschiede, die erst später wie Schutz aussehen.",
    "Du darfst jemanden vermissen und trotzdem wissen, dass es vorbei ist.",
    "Loslassen heißt nicht, dass es bedeutungslos war.",
    "Was du verloren hast, nimmt deine Fähigkeit zu lieben nicht mit.",
    "Manchmal ist der schwerste Abschied der von dem, was hätte sein können.",
    "Irgendwann wird diese Geschichte Erinnerung sein, nicht Mittelpunkt."
  ],
  anxiety: [
    "Dein Kopf probt gerade Zukünfte, die noch nicht passiert sind.",
    "Nicht jeder innere Alarm ist eine Warnung.",
    "Was du fürchtest, ist noch keine Tatsache.",
    "Du musst nur den nächsten echten Moment tragen.",
    "Ungewissheit ist kein Beweis für Gefahr.",
    "Vielleicht brauchst du gerade keine Antwort, sondern Boden.",
    "Lass morgen warten, bis es wirklich morgen ist.",
    "Angst macht Möglichkeiten schnell zu Gewissheiten.",
    "Du musst nicht jedem Gedanken bis zum Ende folgen.",
    "Dein Körper kann Alarm schlagen, obwohl du gerade sicher bist.",
    "Eine offene Frage ist noch kein schlechtes Ergebnis.",
    "Nicht alles, was sich dringend anfühlt, ist dringend.",
    "Vielleicht wird es klarer, wenn dein Körper zuerst ruhiger wird.",
    "Du brauchst nicht zehn Schritte vorauszudenken. Einer reicht.",
    "Angst spricht schnell. Wahrheit darf langsamer sein.",
    "Ein Gedanke kann laut sein und trotzdem falsch liegen.",
    "Du musst das Schlimmste nicht vorbereiten, um vorbereitet zu sein.",
    "Gerade jetzt passiert weniger, als dein Kopf behauptet.",
    "Nimm den Moment, nicht das ganze Morgen.",
    "Manchmal ist Sicherheit nur: Füße auf dem Boden, ein Atemzug, dieser Raum.",
    "Du kannst warten, bis du mehr weißt.",
    "Nicht jede Möglichkeit verdient deine Energie.",
    "Vielleicht ist heute nicht der Tag für eine Lösung, sondern für Beruhigung."
  ],
  lonely: [
    "Stille um dich ist nicht dasselbe wie Leere in dir.",
    "Manchmal fehlt dir nicht irgendein Mensch, sondern echtes Gesehenwerden.",
    "Du brauchst nicht viele Menschen. Du brauchst echte.",
    "Einsamkeit macht aus Distanz schnell Ablehnung. Beides ist nicht dasselbe.",
    "Vielleicht ist heute ein Tag zum Suchen, nicht zum Beurteilen.",
    "Nicht gesehen zu werden ist nicht dasselbe wie unsichtbar zu sein.",
    "Ein stiller Abend ist kein Urteil über dein Leben.",
    "Nähe beginnt oft mit einem kleinen ehrlichen Kontakt.",
    "Vielleicht brauchst du heute Verbindung, nicht Ablenkung.",
    "Du musst nicht interessant genug sein, um Nähe zu verdienen.",
    "Manche Menschen passen erst in dein Leben, wenn du sie noch gar nicht kennst.",
    "Die richtigen Verbindungen fühlen sich selten wie Betteln an.",
    "Ein Mensch, der dich wirklich sieht, kann mehr bedeuten als zehn halbe Kontakte.",
    "Stille sagt nichts darüber, wie liebenswert du bist.",
    "Vielleicht fehlt dir gerade Gemeinschaft, nicht Wert.",
    "Du bist nicht zu spät für neue Nähe.",
    "Ein echtes „Wie geht es dir?“ kann ein Anfang sein.",
    "Nicht jede Nacht muss ein Beweis für morgen sein.",
    "Einsamkeit will Verbindung, nicht Selbstkritik.",
    "Vielleicht brauchst du heute jemanden, bei dem du nichts vorspielen musst.",
    "Die Welt ist größer als der Kreis, der dich gerade nicht erreicht.",
    "Du kannst dich einsam fühlen und trotzdem wieder Verbindung finden.",
    "Manche Begegnungen kommen später als gewünscht und trotzdem genau richtig."
  ],
  burnout: [
    "Wenn alles wichtig ist, ist Ruhe vielleicht gerade das Wichtigste.",
    "Erschöpfung macht selbst kleine Dinge laut.",
    "Du musst nicht erst zusammenbrechen, um langsamer zu werden.",
    "Heute darf „genug“ kleiner sein als sonst.",
    "Dein Körper ist keine Maschine mit schlechtem Gewissen.",
    "Pause ist kein Umweg, wenn du kaum noch Kraft hast.",
    "Vielleicht brauchst du weniger Aufgaben, nicht mehr Disziplin.",
    "Nicht alles muss heute von dir getragen werden.",
    "Ein langsamer Tag kann trotzdem ein guter Tag sein.",
    "Müdigkeit braucht nicht immer Motivation. Manchmal braucht sie Schlaf.",
    "Du musst nicht beweisen, wie viel du aushältst.",
    "Wenn dein Kopf voll ist, darf die Welt kleiner werden.",
    "Heute reicht vielleicht eine Sache statt zehn.",
    "Was nicht dringend ist, darf morgen gehören.",
    "Deine Energie ist eine Grenze, kein Charaktertest.",
    "Es ist okay, etwas einfacher zu machen.",
    "Nicht jede Pause muss verdient werden.",
    "Vielleicht ist Aufhören für heute die produktivste Entscheidung.",
    "Dein Tempo darf sich deinem Zustand anpassen.",
    "Ein leerer Akku lädt nicht schneller durch Schuldgefühle.",
    "Weniger ist manchmal nicht Aufgeben, sondern Schutz.",
    "Du musst heute niemanden beeindrucken.",
    "Wenn du wieder Kraft hast, sieht vieles anders aus."
  ],
  selfdoubt: [
    "Zweifel spricht oft mit der Stimme alter Fehler.",
    "Unsicherheit ist kein Beweis gegen deine Fähigkeit.",
    "Du musst dich nicht sicher fühlen, um richtig zu liegen.",
    "Vielleicht bist du nicht unbereit. Vielleicht bist du nur nervös.",
    "Kompetenz fühlt sich von innen oft unspektakulärer an, als sie von außen aussieht.",
    "Dein letzter Fehler kennt dein nächstes Ergebnis nicht.",
    "Nicht alles, was schwer ist, bedeutet, dass du schlecht darin bist.",
    "Du musst nicht perfekt beginnen, um gut zu werden.",
    "Vielleicht erwartest du von dir Sicherheit, bevor Erfahrung überhaupt entstehen kann.",
    "Zweifel wird leiser, wenn du handelst, nicht wenn du endlos prüfst.",
    "Ein Nein beschreibt eine Entscheidung, nicht deinen Wert.",
    "Du darfst lernen, während du schon unterwegs bist.",
    "Dass du nachdenkst, heißt nicht, dass du unfähig bist.",
    "Vielleicht siehst du gerade nur die Lücke, nicht das, was du schon kannst.",
    "Mut fühlt sich oft wie Unsicherheit mit Bewegung an.",
    "Du musst nicht der Beste sein, um gut genug für den nächsten Schritt zu sein.",
    "Dein Kopf sammelt Fehler schneller als Fortschritte. Schau noch einmal hin.",
    "Können wächst selten im Gefühl von „bereit“.",
    "Vielleicht ist die Frage nicht „Kann ich das?“, sondern „Was brauche ich dafür?“",
    "Ein schwieriger Moment ist keine Diagnose deiner Fähigkeiten.",
    "Du bist nicht verpflichtet, jedem Zweifel eine Abstimmung zu geben.",
    "Manchmal kommt Selbstvertrauen erst nach dem Schritt.",
    "Vielleicht brauchst du heute Beweise aus deiner Vergangenheit, nicht Vorhersagen aus deiner Angst."
  ],
  worthless: [
    "Dein Wert ist kein Konto, das du täglich auffüllen musst.",
    "Du bist nicht nur dann wichtig, wenn du etwas leistest.",
    "Ein schlechter Tag kann deine Sicht verdunkeln, nicht deinen Wert.",
    "Nicht gesehen zu werden ist nicht dasselbe wie bedeutungslos zu sein.",
    "Dein Platz muss nicht ständig verdient werden.",
    "Du bist mehr als die Rückmeldung anderer Menschen.",
    "Ein Fehler verändert nicht deinen Wert.",
    "Müdigkeit macht dich nicht weniger wichtig.",
    "Du musst nicht nützlich sein, um da sein zu dürfen.",
    "Dein Wert wächst nicht mit Lob und schrumpft nicht mit Kritik.",
    "Vielleicht beurteilst du gerade dein ganzes Leben aus einem sehr dunklen Moment.",
    "Was andere übersehen, verschwindet dadurch nicht.",
    "Du bist nicht deine schlechteste Stunde.",
    "Du musst nicht erst besser werden, bevor du zählen darfst.",
    "Ein Mensch kann sich wertlos fühlen, ohne wertlos zu sein.",
    "Deine Bedeutung ist nicht immer sichtbar, während du mitten im Tag steckst.",
    "Du brauchst keinen Beweis, um menschlichen Wert zu haben.",
    "Selbst wenn heute wenig gelingt, bleibst du derselbe Mensch.",
    "Dein Wert gehört nicht in fremde Hände.",
    "Du bist nicht die Summe dessen, was heute schiefging.",
    "Manchmal spricht Erschöpfung wie ein Urteil. Sie ist keines.",
    "Du darfst Raum einnehmen, auch ohne etwas dafür vorzuweisen.",
    "Vielleicht ist das Gefühl gerade echt. Die Schlussfolgerung muss es nicht sein."
  ],
  general: [
    "Vielleicht weißt du längst, welche Antwort du hoffst zu hören.",
    "Die leise Antwort ist nicht immer die schwächere.",
    "Was sich festgefahren anfühlt, braucht vielleicht keinen größeren Druck, sondern einen anderen Winkel.",
    "Nicht jeder nächste Schritt muss groß sein. Nur ehrlich.",
    "Manches wird klarer, sobald du aufhörst, es zu zwingen.",
    "Die Richtung zeigt sich oft erst nach dem ersten kleinen Schritt.",
    "Vielleicht suchst du Gewissheit, obwohl eine Entscheidung reicht.",
    "Was würdest du wählen, wenn niemand zuschaut?",
    "Die Antwort, die du sofort wegschiebst, ist manchmal die, die du prüfen solltest.",
    "Nicht jede offene Tür ist deine Tür.",
    "Ein Nein kann genauso klar sein wie ein Ja.",
    "Vielleicht brauchst du weniger Zeichen und mehr Ehrlichkeit mit dir selbst.",
    "Was fühlt sich leichter an, ohne dass du es dir schönreden musst?",
    "Manchmal ist Ruhe die Stelle, an der du wieder hörst, was du wirklich willst.",
    "Nicht alles muss heute entschieden werden.",
    "Wenn du nur den nächsten Schritt kennen müsstest – welcher wäre es?",
    "Vielleicht ist die Frage wichtiger als die schnelle Antwort.",
    "Du musst nicht dort bleiben, nur weil du lange dort warst.",
    "Was du immer wieder erklären musst, ist vielleicht nicht so stimmig, wie du hoffst.",
    "Vielleicht ist die Antwort nicht weiter weg. Nur leiser.",
    "Du musst nicht warten, bis jede Angst verschwunden ist.",
    "Nicht jedes Zögern bedeutet Nein. Aber jedes Zögern verdient einen Blick.",
    "Was wäre die freundlichste ehrliche Entscheidung für dich heute?"
  ]
};


const emotionProfiles = [["overthinking",["grüble","grueble","grübeln","gruebeln","zerdenke","overthink"],["Du musst nicht jeden Gedanken zu Ende denken.","Manche Klarheit kommt erst, wenn Denken Pause macht.","Nicht jede Schleife braucht eine Lösung."]],["jealousy",["eifersucht","eifersüchtig","eifersuechtig","jealous"],["Eifersucht zeigt oft Angst, nicht Wahrheit.","Vergleiche sagen wenig über deinen Wert.","Frag dich, was du gerade wirklich zu verlieren fürchtest."]],["anger",["wütend","wuetend","wut","sauer","zorn","angry"],["Wut zeigt oft, wo eine Grenze verletzt wurde.","Du darfst wütend sein, ohne dich von der Wut führen zu lassen.","Hinter Wut liegt manchmal etwas Verletzlicheres."]],["sadness",["traurig","traurigkeit","sad","weinen","wein"],["Traurigkeit muss nicht sofort verschwinden.","Du darfst traurig sein, ohne alles erklären zu müssen.","Manches wird leichter, wenn es erst einmal gefühlt werden darf."]],["grief",["trauer","trauere","verlust","gestorben","tod","grief"],["Trauer hat keinen festen Zeitplan.","Was fehlt, darf wichtig bleiben.","Liebe verschwindet nicht nur, weil jemand fehlt."]],["shame",["schäme","schaeme","scham","peinlich","shame"],["Scham will dich verstecken. Wahrheit darf dich wieder hervorholen.","Ein Moment definiert nicht deinen ganzen Charakter.","Du darfst aus etwas lernen, ohne dich dafür kleinzumachen."]],["guilt",["schuld","schuldig","gewissen","guilt"],["Schuld kann ein Hinweis sein, aber kein Zuhause.","Wenn du etwas ändern kannst, beginne dort.","Verantwortung ist hilfreicher als Selbstbestrafung."]],["regret",["bereue","bereuen","reue","regret"],["Du kennst heute Dinge, die du damals nicht wusstest.","Reue kann Richtung geben, ohne dich festzuhalten.","Du darfst aus gestern lernen, ohne dort zu wohnen."]],["envy",["neid","neidisch","envy"],["Neid zeigt manchmal, was du selbst vermisst.","Das Leben anderer ist kein Maßstab für deinen Weg.","Vielleicht steckt in diesem Gefühl ein unerfüllter Wunsch."]],["frustration",["frustriert","frust","frustrated"],["Frust bedeutet nicht, dass du gescheitert bist.","Vielleicht brauchst du einen anderen Weg, nicht mehr Druck.","Ein Stopp kann manchmal mehr bringen als noch mehr Kraft."]],["disappointment",["enttäuscht","enttaeuscht","enttäuschung","disappointed"],["Enttäuschung zeigt, dass dir etwas wichtig war.","Nicht jede Hoffnung war falsch, nur weil sie sich nicht erfüllt hat.","Du darfst neu entscheiden, was du jetzt brauchst."]],["confusion",["verwirrt","verwirrung","confused","ich weiß nicht","ich weiss nicht"],["Verwirrung ist oft ein Zwischenraum, kein Endzustand.","Du musst noch nicht alles verstehen.","Manchmal reicht die nächste klare Sache."]],["indecision",["unentschlossen","kann mich nicht entscheiden","entscheidung fällt schwer","indecision"],["Du brauchst nicht absolute Sicherheit für eine Entscheidung.","Welche Wahl bringt dir langfristig mehr Ruhe?","Ein ehrliches Vielleicht darf auch noch warten."]],["fear_failure",["angst zu scheitern","scheitern","versagen","failure"],["Scheitern ist ein Ereignis, keine Identität.","Ein Versuch kann wertvoll sein, auch wenn er nicht perfekt endet.","Du musst nicht garantieren können, dass es klappt."]],["fear_rejection",["abgelehnt","ablehnung","zurückweisung","zurueckweisung","rejection"],["Ablehnung sagt nicht alles über deinen Wert.","Nicht jede verschlossene Tür war für dich bestimmt.","Du darfst enttäuscht sein, ohne dich selbst abzulehnen."]],["fear_abandonment",["verlassen werden","wird mich verlassen","verlustangst","abandonment"],["Nähe wird nicht sicherer, wenn du dich selbst verlässt.","Du kannst Bindung wünschen und trotzdem Grenzen behalten.","Angst vor Verlust ist noch kein Beweis für Verlust."]],["fear_future",["zukunft","was wenn","angst vor morgen","future"],["Morgen ist noch nicht hier.","Du musst nicht heute alle zukünftigen Probleme lösen.","Der nächste echte Schritt reicht."]],["social_anxiety",["soziale angst","menschenmenge","unter leute","sozial nervös","social anxiety"],["Du musst nicht perfekt wirken, um dazugehören zu dürfen.","Andere beobachten dich meist weniger, als deine Angst behauptet.","Ein kleiner Kontakt reicht für heute."]],["performance_anxiety",["prüfung","pruefung","interview","vortrag","performance anxiety","nervös vor"],["Nervosität bedeutet nicht, dass du unvorbereitet bist.","Dein Körper darf aufgeregt sein, während du trotzdem handeln kannst.","Du musst nicht perfekt sein, nur präsent."]],["imposter",["imposter","hochstapler","nicht verdient","fake"],["Du musst dich nicht wie ein Profi fühlen, um etwas gut zu können.","Erfolg fühlt sich von innen oft weniger beeindruckend an.","Dein Platz ist nicht automatisch ein Irrtum."]],["insecurity",["unsicher","unsicherheit","insecure"],["Unsicherheit ist ein Gefühl, keine Bewertung.","Du darfst handeln, bevor du dich völlig sicher fühlst.","Sicherheit wächst oft erst unterwegs."]],["low_confidence",["kein selbstvertrauen","wenig selbstvertrauen","traue mir nicht","confidence"],["Selbstvertrauen kommt oft nach dem Schritt, nicht davor.","Du brauchst heute nur genug Mut für einen kleinen Versuch.","Deine Fähigkeiten verschwinden nicht, nur weil du zweifelst."]],["body_insecurity",["körper","koerper","zu dick","zu dünn","zu duenn","hässlich","haesslich","body image"],["Dein Körper ist mehr als etwas, das bewertet werden muss.","Du musst dich heute nicht schön finden, um freundlich mit dir zu sein.","Dein Wert passt in keine Kleidergröße."]],["comparison",["vergleiche mich","vergleich","besser als ich","comparison"],["Du siehst bei anderen oft das Ergebnis und bei dir den ganzen Weg.","Vergleich macht aus fremdem Glanz schnell eigenen Mangel.","Dein Tempo muss nicht ihres sein."]],["perfectionism",["perfektion","perfektionist","perfekt sein","perfection"],["Perfekt ist oft nur eine andere Form von Aufschieben.","Gut genug darf wirklich genug sein.","Fehler machen eine Sache menschlich, nicht wertlos."]],["procrastination",["aufschieben","prokrastination","procrastinate","komme nicht dazu"],["Mach es kleiner, nicht dramatischer.","Fünf Minuten zählen auch.","Der Anfang muss nicht motiviert aussehen."]],["motivation_low",["keine motivation","unmotiviert","motivation fehlt"],["Motivation ist nicht immer der Anfang. Manchmal kommt sie nach Bewegung.","Mach es so klein, dass dein Widerstand kaum noch etwas dagegen hat.","Du brauchst heute keinen großen Antrieb."]],["boredom",["langweilig","langeweile","bored"],["Langeweile kann Platz sein, nicht nur Leere.","Vielleicht braucht dein Kopf etwas Neues, nicht mehr Reiz.","Frag dich, was dich gerade wirklich interessieren würde."]],["restlessness",["rastlos","ruhelose","kann nicht still","restless"],["Nicht jede Unruhe braucht sofort Aktion.","Dein Körper darf langsamer werden als deine Gedanken.","Manchmal hilft weniger Input mehr als mehr Ablenkung."]],["overstimulation",["überreizt","ueberreizt","zu laut","zu viel input","overstimulated"],["Weniger Reize können gerade mehr helfen als mehr Lösungen.","Mach die Welt für zehn Minuten kleiner.","Dein Nervensystem braucht vielleicht Ruhe, nicht Erklärung."]],["irritability",["gereizt","genervt","reizbar","irritated"],["Gereiztheit ist oft Müdigkeit mit schärferer Stimme.","Vielleicht brauchst du Abstand, bevor du antwortest.","Nicht jeder kleine Reiz verdient deine ganze Energie."]],["resentment",["groll","nachtragend","resentment","nehme übel","nehme uebel"],["Groll hält dich oft länger fest als die andere Person.","Eine Grenze kann hilfreicher sein als inneres Wiederholen.","Du musst nicht vergeben, um dich zu lösen."]],["betrayal",["verraten","betrug","betrogen","betrayal"],["Verrat verändert Vertrauen, nicht deinen Wert.","Du darfst vorsichtiger werden, ohne hart zu werden.","Was passiert ist, darf deine Grenze neu definieren."]],["trust_issues",["vertrauen fällt schwer","vertraue niemandem","trust issues"],["Vertrauen darf langsam wachsen.","Du musst nicht alles glauben, um offen zu bleiben.","Sicherheit entsteht auch durch beobachtetes Verhalten."]],["heartache",["herzweh","herz tut weh","liebe tut weh","heartache"],["Dein Herz darf Zeit brauchen.","Schmerz ist nicht automatisch ein Zeichen, zurückzugehen.","Etwas kann fehlen und trotzdem vorbei sein."]],["missing_someone",["vermisse ihn","vermisse sie","ich vermisse","missing"],["Vermissen ist kein Auftrag zur Rückkehr.","Du kannst jemanden vermissen und trotzdem weitergehen.","Nähe von gestern ist nicht immer Zukunft."]],["attachment",["kann nicht loslassen","klammere","abhängig von ihm","abhängig von ihr","attachment"],["Loslassen beginnt oft, bevor das Gefühl bereit ist.","Du darfst dich lösen, auch wenn ein Teil noch festhält.","Nähe sollte dich nicht von dir selbst entfernen."]],["unrequited_love",["unerwiderte liebe","liebt mich nicht","mag mich nicht zurück","unrequited"],["Nicht erwiderte Liebe macht deine Gefühle nicht falsch.","Du kannst lieben, ohne dich weiter verfügbar zu halten.","Dein Herz verdient Gegenseitigkeit."]],["breakup_recovery",["über ex hinweg","nach trennung","trennung verarbeiten"],["Heilung ist nicht linear.","Ein Rückfall in Erinnerungen ist kein Rückschritt.","Du darfst weitergehen, auch wenn etwas noch weh tut."]],["relationship_doubt",["beziehungszweifel","liebe ich ihn noch","liebe ich sie noch","relationship doubt"],["Zweifel sind Informationen, keine sofortige Entscheidung.","Frag dich, wie du dich in dieser Beziehung meistens fühlst.","Liebe allein beantwortet nicht jede Frage."]],["conflict",["streit","konflikt","wir streiten","argument"],["Im Streit geht es oft um mehr als den letzten Satz.","Du darfst eine Pause machen, bevor du weiterredest.","Verstehen und Zustimmen sind nicht dasselbe."]],["boundaries",["grenzen","nein sagen","respektiert mein nein nicht","boundaries"],["Eine Grenze braucht keine lange Rechtfertigung.","Nein ist ein vollständiger Satz.","Wer dich respektiert, muss deine Grenze nicht mögen, aber beachten."]],["people_pleasing",["allen recht machen","people pleaser","kann nicht nein sagen"],["Du musst nicht überall angenehm sein, um liebenswert zu bleiben.","Ein Nein schützt manchmal ein ehrlicheres Ja.","Fremde Enttäuschung ist nicht automatisch dein Fehler."]],["approval_seeking",["anerkennung","bestätigung","bestaetigung","approval"],["Bestätigung von außen hält selten lange.","Frag dich, ob du selbst hinter deiner Entscheidung stehen kannst.","Du musst nicht von allen verstanden werden."]],["feeling_unseen",["nicht gesehen","keiner sieht mich","unsichtbar","unseen"],["Nicht gesehen zu werden heißt nicht, dass du nichts zu sehen bist.","Vielleicht brauchst du andere Augen, nicht einen anderen Wert.","Du darfst Orte verlassen, an denen du ständig übersehen wirst."]],["feeling_unheard",["hört mir nicht zu","hoert mir nicht zu","nicht gehört","nicht gehoert","unheard"],["Du darfst erwarten, dass man dir zuhört.","Wiederholen macht deine Wahrheit nicht weniger wahr.","Manche Gespräche brauchen einen anderen Rahmen."]],["rejection",["abgewiesen","zurückgewiesen","zurueckgewiesen","rejected"],["Zurückweisung ist schmerzhaft, aber nicht endgültig über dich.","Du darfst enttäuscht sein und trotzdem weitergehen.","Ein Nein kann dich umleiten, ohne dich zu entwerten."]],["failure",["gescheitert","versagt","failure"],["Ein Ergebnis ist kein Urteil über dein ganzes Können.","Du kannst neu anfangen, ohne bei null zu sein.","Was hat dieser Versuch dir gezeigt?"]],["mistake",["fehler gemacht","mistake","falsch gemacht"],["Ein Fehler ist Information.","Du darfst korrigieren, ohne dich zu verurteilen.","Verantwortung und Selbsthass sind nicht dasselbe."]],["embarrassment",["blamiert","peinlich","embarrassed"],["Andere erinnern sich meist kürzer daran als du.","Peinlichkeit schrumpft mit Abstand.","Du darfst menschlich gewesen sein."]],["humiliation",["gedemütigt","gedemuetigt","demütigung","humiliated"],["Was jemand dir angetan hat, definiert nicht deinen Wert.","Du darfst deine Würde zurückholen, ohne den Moment ungeschehen zu machen.","Scham gehört nicht automatisch zu dir."]],["loneliness_night",["nachts einsam","abends einsam","lonely at night"],["Nächte machen Gefühle oft größer.","Dieser Abend ist nicht dein ganzes Leben.","Morgen kann sich die gleiche Welt anders anfühlen."]],["homesick",["heimweh","homesick"],["Heimweh zeigt, dass irgendwo etwas Bedeutung hat.","Du darfst zwei Orte gleichzeitig vermissen und lieben.","Zugehörigkeit kann mehr als einen Ort haben."]],["nostalgia",["nostalgie","früher war","frueher war","nostalgic"],["Erinnerung leuchtet oft wärmer als der damalige Alltag.","Du darfst zurückdenken, ohne zurückzumüssen.","Etwas Schönes darf vorbei sein und trotzdem schön bleiben."]],["emptiness",["leer","leere in mir","empty"],["Leere ist ein Zustand, kein Beweis, dass nichts mehr kommt.","Du musst sie nicht sofort füllen.","Manchmal braucht Leere erst Ruhe, bevor etwas Neues hineinpasst."]],["numbness",["taub","fühle nichts","fuehle nichts","numb"],["Nichts zu fühlen kann auch Schutz sein.","Du musst Gefühle nicht erzwingen.","Dein Inneres darf langsam wieder auftauen."]],["apathy",["alles egal","gleichgültig","gleichgueltig","apathisch"],["Wenn alles egal wirkt, braucht dein System vielleicht Entlastung.","Du musst heute nicht leidenschaftlich sein.","Ein kleiner echter Impuls reicht."]],["hopelessness",["hoffnungslos","keine hoffnung","hopeless"],["Dass du Hoffnung gerade nicht fühlst, heißt nicht, dass es keine gibt.","Heute musst du nicht die ganze Zukunft glauben.","Ein kleiner nächster Schritt reicht als Gegenbeweis zur Hoffnungslosigkeit."]],["discouraged",["entmutigt","discouraged"],["Entmutigung ist Müdigkeit nach Widerstand.","Du darfst neu ansetzen.","Ein langsamer Fortschritt ist immer noch Fortschritt."]],["stuck",["festgefahren","stecke fest","stuck"],["Feststecken heißt nicht, dass es keinen Ausgang gibt.","Vielleicht brauchst du Bewegung in eine andere Richtung.","Der kleinste veränderbare Teil ist ein guter Anfang."]],["lost",["verloren","weiß nicht wohin","weiss nicht wohin","lost"],["Du musst nicht die ganze Karte sehen.","Ein nächster Schritt kann reichen, auch ohne großes Ziel.","Verloren sein ist manchmal der Anfang einer neuen Richtung."]],["uncertainty",["ungewiss","ungewissheit","uncertain"],["Ungewissheit ist unangenehm, aber nicht gefährlich.","Du darfst warten, bis mehr Information da ist.","Nichtwissen ist manchmal ehrlicher als eine erzwungene Antwort."]],["change_fear",["angst vor veränderung","angst vor veraenderung","change scares"],["Veränderung darf Angst machen und trotzdem richtig sein.","Du musst nicht alles Alte hassen, um Neues zu wählen.","Ein neuer Weg fühlt sich selten sofort vertraut an."]],["starting_over",["neu anfangen","von vorne","starting over"],["Neu anfangen heißt nicht, dass alles davor umsonst war.","Du nimmst Erfahrung mit.","Ein neuer Anfang darf klein sein."]],["transition",["übergang","uebergang","zwischenphase","transition"],["Zwischenphasen fühlen sich oft ungeordneter an, als sie sind.","Du musst noch nicht angekommen sein.","Nicht mehr dort und noch nicht hier ist trotzdem ein Ort."]],["career_stress",["jobstress","arbeit stresst","karriere stress","career stress"],["Dein Job ist ein Teil deines Lebens, nicht dein ganzer Wert.","Nicht jede berufliche Krise braucht sofort eine endgültige Entscheidung.","Was brauchst du, damit Arbeit wieder tragbarer wird?"]],["job_search",["jobsuche","bewerbung","kein job","job search"],["Eine Absage ist Statistik, kein Urteil.","Jobsuche verlangt Ausdauer, nicht Selbstverachtung.","Die richtige Rolle braucht nur ein echtes Ja."]],["interview_nerves",["vorstellungsgespräch","vorstellungsgespraech","interview nervös","interview nervoes"],["Nervosität kann neben Kompetenz existieren.","Du musst nicht perfekt antworten, sondern echt und konkret.","Atme. Du kennst deine eigene Geschichte."]],["work_overload",["zu viel arbeit","arbeitsüberlastung","arbeitsueberlastung","workload"],["Nicht alles, was auf deinem Tisch liegt, gehört heute auf deine Schultern.","Priorität bedeutet auch, Dinge nicht zu tun.","Dein Tempo darf Grenzen haben."]],["boss_conflict",["chef problem","chef nervt","streit mit chef","boss"],["Du darfst professionell bleiben und trotzdem Grenzen haben.","Nicht jede Autorität hat automatisch recht.","Dokumentiere Fakten, nicht nur Gefühle."]],["coworker_conflict",["kollege nervt","kollegin nervt","streit mit kollege","coworker"],["Nicht jede Spannung muss persönlich werden.","Klare Worte sind oft hilfreicher als stiller Groll.","Du darfst sachlich sein, ohne kalt zu werden."]],["money_stress",["geldsorgen","kein geld","pleite","finanzielle sorgen","money stress"],["Geldstress macht Zukunft schnell eng.","Heute zählt die nächste konkrete Zahl, nicht jede mögliche Katastrophe.","Ein Plan kann klein beginnen."]],["debt_stress",["schulden","kredit","debt"],["Schulden sind ein Problem, keine Identität.","Klarheit ist stärker als Vermeidung.","Ein realistischer Plan ist mehr wert als Scham."]],["housing_stress",["wohnungssuche","keine wohnung","miete","housing"],["Wohnungssuche kann zermürben, ohne dass du etwas falsch machst.","Eine Absage ist noch kein Endpunkt.","Bleib bei den Kriterien, die dich wirklich schützen."]],["moving_stress",["umzug","umziehen","moving"],["Umzug ist Veränderung in Kartons.","Du musst nicht alles gleichzeitig ordnen.","Ein Raum nach dem anderen reicht."]],["travel_anxiety",["reiseangst","flugangst","travel anxiety"],["Du musst die ganze Reise nicht jetzt schon erleben.","Der nächste Abschnitt reicht.","Vorbereitung darf beruhigen, ohne alles kontrollieren zu müssen."]],["health_anxiety",["gesundheitsangst","krankheit angst","health anxiety"],["Ein Symptom ist noch keine Diagnose.","Dein Körper verdient Aufmerksamkeit, nicht Panik.","Hole Fakten ein, bevor Angst die Geschichte schreibt."]],["pain_frustration",["schmerzen","tut weh","pain"],["Schmerz darf deinen Tag beeinflussen, ohne deinen Wert zu verändern.","Du musst mit Schmerz nicht genauso funktionieren wie ohne.","Schonung und Hilfe sind keine Schwäche."]],["fatigue",["erschöpft","erschoepft","müde","muede","fatigue"],["Müdigkeit verändert Perspektive.","Vielleicht braucht dein Körper heute mehr als dein Ehrgeiz.","Ruhe ist eine echte Handlung."]],["sleep_deprived",["nicht geschlafen","schlafmangel","insomnia","schlaflos"],["Schlafmangel macht Gedanken lauter und dunkler.","Heute darfst du Entscheidungen kleiner halten.","Dein Gehirn braucht vielleicht zuerst Ruhe."]],["period_mood",["periode","menstruation","pms","zyklus"],["Dein Körper arbeitet gerade mehr, als man von außen sieht.","Du darfst heute sanfter mit deinem Tempo sein.","Ein schwerer Tag im Zyklus ist kein Charakterfehler."]],["overwhelmed",["überwältigt","ueberwaeltigt","alles kommt zusammen"],["Du musst nicht alles gleichzeitig tragen.","Sortiere nach jetzt, später und gar nicht.","Ein einziger nächster Schritt ist genug."]],["pressure",["druck","unter druck","pressure"],["Druck macht Dringlichkeit größer als Wahrheit.","Du darfst kurz aus dem Tempo aussteigen.","Nicht jede Erwartung gehört dir."]],["responsibility_overload",["zu viel verantwortung","alles hängt an mir","alles haengt an mir"],["Nicht alles muss von dir gehalten werden.","Verantwortung braucht Grenzen.","Du darfst Aufgaben zurückgeben, die nicht deine sind."]],["caregiver_fatigue",["kümmere mich um alle","kuemmere mich um alle","caregiver"],["Für andere da zu sein darf dich nicht unsichtbar machen.","Du brauchst auch Versorgung.","Hilfe annehmen ist Teil von Verantwortung."]],["decision_fatigue",["zu viele entscheidungen","entscheidung müde","entscheidung muede"],["Nicht jede Entscheidung verdient heute dieselbe Energie.","Vereinfache, wo du kannst.","Manchmal ist die gute Standardlösung genug."]],["creative_block",["kreativ blockiert","kreative blockade","creative block"],["Kreativität braucht Spielraum, nicht Zwang.","Mach etwas Schlechtes absichtlich. Es kann den Weg öffnen.","Ein Entwurf darf unfertig sein."]],["writer_block",["schreibblockade","writer's block","writers block"],["Der erste Satz muss nicht der beste sein.","Schreib, bevor du bewertest.","Leere Seiten fürchten Bewegung mehr als schlechte Sätze."]],["study_stress",["lern stress","lernen stresst","prüfung lernen","study stress"],["Lernen braucht Pausen, damit etwas hängen bleibt.","Teile den Stoff kleiner.","Du musst nicht alles heute beherrschen."]],["exam_fear",["prüfungsangst","pruefungsangst","exam fear"],["Eine Prüfung misst einen Moment, nicht deinen ganzen Wert.","Atme und beantworte zuerst das, was du weißt.","Nervosität löscht Wissen nicht aus."]],["family_conflict",["familienstreit","familie stresst","family conflict"],["Familie kann Nähe und Belastung gleichzeitig sein.","Verwandtschaft ersetzt keine Grenze.","Du darfst Abstand brauchen."]],["parent_conflict",["mutter nervt","vater nervt","eltern streit","parent"],["Du darfst erwachsen sein, auch wenn alte Rollen wieder auftauchen.","Respekt muss in beide Richtungen gehen.","Du musst nicht jede Erwartung deiner Eltern erfüllen."]],["friendship_conflict",["freundschaft streit","freundin streit","freund streit","friendship"],["Freundschaft braucht Ehrlichkeit, nicht ständige Harmonie.","Ein Konflikt zeigt oft, was geklärt werden muss.","Du darfst Nähe neu verhandeln."]],["friendship_loss",["freund verloren","freundschaft vorbei","friend breakup"],["Auch Freundschaften dürfen betrauert werden.","Nicht jede Verbindung hält ein ganzes Leben.","Was echt war, bleibt echt, auch wenn es endet."]],["social_exclusion",["ausgeschlossen","nicht eingeladen","exclude"],["Ausgeschlossen zu werden tut weh, aber sagt nicht, dass du unerwünscht bist.","Ein Kreis ist nicht die ganze Welt.","Du darfst Orte suchen, an denen du freiwillig mitgedacht wirst."]],["fomo",["fomo","verpasse etwas","alle machen was"],["Du musst nicht überall sein, um ein gutes Leben zu haben.","Nicht dabei zu sein ist nicht automatisch Verlust.","Wähle, was wirklich zu dir passt."]],["social_media_comparison",["instagram macht mich","tiktok vergleich","social media"],["Du vergleichst dein Innenleben mit fremden Ausschnitten.","Ein Feed ist keine vollständige Realität.","Dein echtes Leben muss nicht kuratiert aussehen."]],["jealous_friend",["neid auf freund","eifersüchtig auf freund","eifersuechtig auf freund"],["Du kannst jemandem etwas gönnen und es selbst auch wollen.","Neid kann ein Wunsch in Verkleidung sein.","Frag dich, was du für dich daraus lernen kannst."]],["romantic_uncertainty",["mag er mich","mag sie mich","steht er auf mich","steht sie auf mich"],["Unklarheit ist nicht dasselbe wie Hoffnung.","Achte mehr auf Verhalten als auf Fantasie.","Du musst dich nicht in Zeichen verlieren."]],["dating_anxiety",["dating angst","date nervös","date nervoes"],["Du musst niemanden überzeugen, dich zu mögen.","Ein Date ist ein gegenseitiges Kennenlernen.","Neugier ist hilfreicher als Prüfung."]],["ghosting",["ghosting","ghostet","antwortet nicht mehr"],["Schweigen ist auch Information.","Du musst nicht endlos auf Klarheit warten.","Jemandes Rückzug definiert nicht deinen Wert."]],["situationship",["situationship","was sind wir","undefinierte beziehung"],["Unklarheit kann länger wehtun als ein klares Nein.","Du darfst fragen, was du wirklich brauchst.","Nähe ohne Klarheit ist nicht für jeden genug."]],["sexual_pressure",["sex druck","sexuell unter druck","will sex obwohl ich nicht will"],["Dein Nein braucht keine Erklärung.","Nähe ohne Zustimmung ist keine Nähe.","Dein Körper gehört dir."]],["boundary_violation",["grenze überschritten","grenze ueberschritten","meine grenze ignoriert"],["Eine verletzte Grenze verdient Klarheit.","Du darfst Abstand herstellen.","Dein Unwohlsein ist Grund genug, etwas zu stoppen."]],["conflict_avoidance",["vermeide konflikt","traue mich nichts zu sagen","conflict avoid"],["Frieden um jeden Preis wird oft teuer.","Ein ruhiges klares Gespräch kann mehr schützen als Schweigen.","Du darfst unangenehm ehrlich sein."]],["forgiveness",["vergeben","verzeihen","forgive"],["Vergeben ist keine Pflicht.","Du kannst Frieden suchen, ohne wieder Zugang zu geben.","Loslassen und Versöhnen sind nicht dasselbe."]],["self_forgiveness",["mir selbst vergeben","kann mir nicht verzeihen"],["Du darfst Verantwortung übernehmen und trotzdem weiterleben.","Selbstvergebung löscht nichts aus, aber sie beendet ewige Bestrafung.","Du bist mehr als deine schlechteste Entscheidung."]],["self_compassion",["zu hart zu mir","habe kein mitgefühl mit mir","self compassion"],["Sprich mit dir, wie du mit jemandem sprechen würdest, den du liebst.","Härte ist nicht dasselbe wie Stärke.","Du darfst dir selbst ein sicherer Ort sein."]],["identity_confusion",["wer bin ich","identitätskrise","identitaetskrise","identity"],["Du musst dich nicht endgültig definieren.","Identität darf sich entwickeln.","Du bist nicht verpflichtet, immer dieselbe Version von dir zu bleiben."]],["purpose",["sinn im leben","kein sinn","wozu das alles","purpose"],["Sinn muss nicht immer groß sein.","Manchmal entsteht Bedeutung aus dem, was du wiederholt pflegst.","Du darfst Sinn bauen, statt ihn nur zu finden."]],["existential",["existenzangst","existentiell","alles sinnlos","existential"],["Große Fragen brauchen nicht immer sofort Antworten.","Du darfst im Kleinen leben, während das Große offen bleibt.","Bedeutung kann gleichzeitig fragil und echt sein."]],["spiritual_doubt",["glaube zweifel","gott zweifel","spiritual doubt"],["Zweifel und Glaube können im selben Raum existieren.","Fragen machen deine Suche nicht unecht.","Du darfst offen bleiben, ohne alles zu wissen."]],["hopeful",["hoffnungsvoll","hopeful"],["Hoffnung darf leise sein.","Du musst nicht alles wissen, um nach vorn zu schauen.","Halte fest, was dich gerade ein wenig weiterzieht."]],["excited",["aufgeregt","freue mich","excited"],["Freude darf groß sein.","Du musst gute Dinge nicht vorsorglich kleinreden.","Genieß, was gerade lebendig ist."]],["happy",["glücklich","gluecklich","happy"],["Du darfst diesen Moment einfach mögen.","Freude braucht keine Rechtfertigung.","Lass etwas Gutes auch wirklich gut sein."]],["proud",["stolz auf mich","proud"],["Nimm deinen Fortschritt wahr.","Du darfst stolz sein, ohne arrogant zu sein.","Feier auch, was früher schwer war."]],["grateful",["dankbar","grateful"],["Dankbarkeit muss Schmerz nicht wegdrücken.","Halte kurz fest, was heute gut war.","Manchmal verändert ein kleiner guter Moment den ganzen Ton des Tages."]],["relieved",["erleichtert","relieved"],["Du darfst die Anspannung jetzt loslassen.","Nicht jede Erleichterung braucht sofort die nächste Sorge.","Lass deinen Körper merken, dass etwas vorbei ist."]],["calm",["ruhig","friedlich","calm"],["Bleib einen Moment hier.","Ruhe muss nicht produktiv sein.","Vielleicht ist genau das gerade genug."]]];

for (const [key,,lines] of emotionProfiles) {
  responses[key] = lines;
}

const keywords = {
  heartbreak: [
    "liebeskummer","herzschmerz","trennung","getrennt","verlassen","ex ","ex-",
    "exfreund","ex-freund","exfreundin","ex-freundin","vermiss","sehnsucht",
    "schluss gemacht","beziehung vorbei","liebe vorbei","herz gebrochen",
    "gebrochenes herz","heartbreak","broke up","breakup"
  ],
  anxiety: [
    "angst","panik","panic","anxiety","ängstlich","aengstlich","nervös","nervoes",
    "sorge","sorgen","überdenken","ueberdenken","overthinking","unruhe","unruhig",
    "ich habe angst","ich bekomme panik","herzrasen"
  ],
  lonely: [
    "einsam","allein","niemand","keiner","keine freunde","lonely","alone",
    "verlassen fühlen","verlassen fuehlen","isoliert","niemand schreibt",
    "keiner schreibt","niemand da"
  ],
  burnout: [
    "überfordert","ueberfordert","erschöpft","erschoepft","ausgebrannt","burnout",
    "stress","zu viel","alles zu viel","keine energie","kraftlos","müde","muede",
    "überlastet","ueberlastet","overwhelmed"
  ],
  selfdoubt: [
    "selbstzweifel","dumm","nicht gut genug","ich kann das nicht","versager",
    "unfähig","unfaehig","stupid","failure","ich schaffe das nicht","zu schlecht",
    "bin ich gut genug","zweifel an mir"
  ],
  worthless: [
    "wertlos","nutzlos","unnötig","unnoetig","egal","niemand braucht mich",
    "ich bin nichts","worthless","useless","kein wert","nicht wichtig",
    "ich bin unwichtig"
  ]
};

const questionResponses = {
  "de": {
    "yesno": [
      "Eher ja — aber nur, wenn du dabei bei dir bleibst.",
      "Eher nein. Nicht aus diesem Gefühl heraus.",
      "Noch nicht. Lass etwas Ruhe dazwischen.",
      "Ja, wenn es sich ruhig und nicht verzweifelt anfühlt.",
      "Nein, wenn du dafür deine Grenze verlassen musst.",
      "Die Kugel sagt: warte einen Moment länger.",
      "Ein vorsichtiges Ja.",
      "Ein sanftes Nein schützt dich gerade mehr.",
      "Noch ist die Antwort nicht reif.",
      "Ja — aber kleiner, als du gerade denkst.",
      "Nein — nicht um etwas beweisen zu müssen.",
      "Vielleicht. Prüfe zuerst, was du wirklich brauchst.",
      "Die Richtung ist eher Ja als Nein.",
      "Die Richtung ist eher Nein als Ja.",
      "Heute noch nicht.",
      "Wenn du morgen dasselbe fühlst, schau noch einmal hin.",
      "Ja, solange du dich nicht dabei verlierst.",
      "Nein, wenn nur Angst dich antreibt.",
      "Die Antwort liegt zwischen Mut und Geduld.",
      "Die Kugel bittet dich, nichts zu erzwingen.",
      "Ein Ja braucht hier Ruhe.",
      "Ein Nein darf ebenfalls Liebe zu dir selbst sein.",
      "Frag noch einmal, wenn der innere Lärm leiser ist."
    ],
    "decision": [
      "Wähle den Weg, auf dem du dich nicht selbst verlässt.",
      "Die ruhigere Richtung verdient mehr Aufmerksamkeit.",
      "Nimm nicht automatisch den Weg, der deine Angst am schnellsten beruhigt.",
      "Wähle, was morgen noch zu dir passt.",
      "Die bessere Richtung macht dich nicht kleiner.",
      "Schau darauf, wo du freier atmen kannst.",
      "Entscheide nicht aus Schuld.",
      "Was du aus Würde wählst, trägt meist länger.",
      "Die Kugel zeigt auf den Weg mit weniger innerem Kampf.",
      "Wähle nicht nur das Bekannte, weil es bekannt ist.",
      "Die richtige Richtung muss sich nicht spektakulär anfühlen.",
      "Nimm die Option, bei der du dir selbst treu bleibst.",
      "Wenn eine Wahl nur aus Angst besteht, gib ihr noch Zeit.",
      "Der sanftere Weg ist nicht automatisch der schwächere.",
      "Achte auf das, was dir Kraft zurückgibt.",
      "Wähle nicht, um jemanden von deinem Wert zu überzeugen.",
      "Die Antwort steckt eher in Frieden als in Druck.",
      "Manchmal ist eine Pause selbst eine Entscheidung.",
      "Du darfst die Wahl kleiner machen.",
      "Nimm die Richtung, die deine Grenze respektiert.",
      "Was du nicht erzwingen musst, verdient einen zweiten Blick.",
      "Wähle nach dem, was real ist — nicht nach dem, was du hoffst.",
      "Die Kugel sagt: erst Klarheit, dann Richtung."
    ],
    "comfort": [
      "Ja, es wird wieder leichter.",
      "Nicht sofort — aber dieser Zustand bleibt nicht für immer so.",
      "Du musst nur diesen nächsten Moment schaffen.",
      "Der Schmerz wird nicht immer so laut sein.",
      "Heute darf Überleben klein aussehen.",
      "Du musst gerade nicht alles verstehen.",
      "Es reicht, wenn du den Tag in kleinen Stücken nimmst.",
      "Du bist nicht verpflichtet, jetzt schon okay zu sein.",
      "Das Schwere darf langsam leichter werden.",
      "Ein ruhigerer Moment kommt wieder.",
      "Du darfst dich heute einfach tragen lassen.",
      "Auch lange Nächte enden.",
      "Das Gefühl ist groß, aber nicht grenzenlos.",
      "Du brauchst gerade keine perfekte Lösung.",
      "Es darf weh tun, ohne dass es für immer weh tut.",
      "Dein Herz darf Zeit brauchen.",
      "Du musst nicht schneller heilen, als du kannst.",
      "Heute reicht ein kleiner sicherer Schritt.",
      "Es wird nicht alles auf einmal besser — aber etwas kann.",
      "Du darfst müde sein und trotzdem weiterkommen.",
      "Dieser Moment ist nicht deine ganze Zukunft.",
      "Du wirst nicht für immer genau hier stehen.",
      "Die Kugel sagt: halte nur den nächsten kleinen Abschnitt."
    ],
    "love": [
      "Nicht jede Rückkehr wäre automatisch Heilung.",
      "Achte weniger auf Worte und mehr auf Verhalten.",
      "Wenn du schreiben willst, tu es nicht aus Panik.",
      "Was echt ist, braucht nicht ständig Rätsel.",
      "Sehnsucht ist nicht immer ein Zeichen für Rückkehr.",
      "Die wichtigere Frage ist, ob diese Verbindung dir gut tut.",
      "Liebe darf klarer sein als dieses Warten.",
      "Du kannst jemanden lieben und trotzdem Abstand brauchen.",
      "Vermissen bedeutet nicht automatisch, dass ihr zusammengehört.",
      "Wenn nur du die Verbindung trägst, ist das auch eine Antwort.",
      "Eine Rückkehr wäre nur wertvoll, wenn sich wirklich etwas verändert.",
      "Du musst niemanden überzeugen, dich zu wählen.",
      "Liebe sollte nicht dauerhaft deine Würde kosten.",
      "Schau darauf, wie du dich nach dem Kontakt fühlst.",
      "Manchmal fehlt dir die Hoffnung mehr als der Mensch.",
      "Warte nicht nur auf Zeichen — achte auf Taten.",
      "Du darfst lieben, ohne dich selbst aufzugeben.",
      "Ein echtes Ja zu dir sollte nicht wie ständiges Rätselraten wirken.",
      "Die Vergangenheit kann schön gewesen sein und trotzdem vorbei.",
      "Wenn du schreibst, dann weil du etwas Echtes sagen willst — nicht um Angst zu beruhigen.",
      "Nicht jede starke Verbindung ist eine gute Verbindung.",
      "Dein Herz darf fühlen, während deine Grenze stehen bleibt.",
      "Die Kugel fragt zurück: Würde dir die Antwort wirklich Frieden bringen?"
    ],
    "selfworth": [
      "Ja. Du bist gut genug, auch bevor du es fühlst.",
      "Du musst deinen Wert nicht erst beweisen.",
      "Du kannst mehr, als dein Zweifel gerade zulässt.",
      "Ein Fehler macht dich nicht zu einem Fehler.",
      "Du darfst anfangen, bevor du dich bereit fühlst.",
      "Unsicherheit ist kein Beweis gegen deine Fähigkeit.",
      "Du bist nicht zu viel.",
      "Du bist auch an schlechten Tagen nicht weniger wert.",
      "Dein Tempo sagt nichts über deinen Wert.",
      "Du darfst stolz auf kleine Fortschritte sein.",
      "Du musst nicht perfekt sein, um liebenswert zu sein.",
      "Dein innerer Kritiker ist nicht dein Lebenslauf.",
      "Ja, du darfst dir das zutrauen.",
      "Du reichst auch ohne Applaus.",
      "Du musst nicht von allen verstanden werden.",
      "Du bist mehr als dein letzter schlechter Moment.",
      "Zweifel und Fähigkeit können gleichzeitig existieren.",
      "Du darfst Raum einnehmen.",
      "Dein Wert hängt nicht davon ab, ob jemand dich wählt.",
      "Du musst nicht erst stärker werden, um Respekt zu verdienen.",
      "Ja, du darfst an dich glauben, auch vorsichtig.",
      "Du bist nicht verpflichtet, dich kleinzureden.",
      "Die Kugel sagt: unterschätze dich heute nicht."
    ],
    "future": [
      "Noch ist nicht alles sichtbar.",
      "Die nächsten Schritte bringen mehr Klarheit als Grübeln.",
      "Etwas bewegt sich, auch wenn du es noch nicht siehst.",
      "Die Zukunft ist offener, als deine Angst behauptet.",
      "Noch ist nichts endgültig.",
      "Warte auf Fakten, bevor du eine Geschichte daraus machst.",
      "Die Antwort kommt eher Schritt für Schritt als auf einmal.",
      "Morgen kann anders aussehen als heute.",
      "Ein Teil deiner Zukunft wird gerade erst gebaut.",
      "Nicht jede Verzögerung ist ein Nein.",
      "Manches braucht länger, ohne verloren zu sein.",
      "Die Kugel sieht mehr Möglichkeiten als nur eine.",
      "Lass die Zukunft noch ein bisschen Zukunft sein.",
      "Was wirklich kommt, wird sich deutlicher zeigen.",
      "Du musst nicht heute wissen, wie alles endet.",
      "Ein neuer Weg kann entstehen, den du noch nicht eingeplant hast.",
      "Die nächsten Tage können Informationen bringen, die heute fehlen.",
      "Ungewissheit ist noch kein schlechtes Ergebnis.",
      "Noch ist Raum für Veränderung.",
      "Die Zukunft gehört nicht deinem schlimmsten Szenario.",
      "Etwas kann sich zu deinen Gunsten verschieben, ohne dass du es erzwingst.",
      "Der nächste Hinweis ist wichtiger als die endgültige Vorhersage.",
      "Die Kugel sagt: noch offen."
    ],
    "general": [
      "Die Antwort liegt näher, als du denkst.",
      "Frag dich, was dich ruhiger statt nur kurzfristig erleichtert.",
      "Nicht jede Frage braucht heute eine endgültige Antwort.",
      "Die Kugel zeigt auf den nächsten kleinen ehrlichen Schritt.",
      "Was wahr ist, hält auch einen ruhigen Blick aus.",
      "Vielleicht kennst du bereits einen Teil der Antwort.",
      "Schau auf das, was tatsächlich passiert — nicht nur auf das, was du befürchtest.",
      "Die klarste Antwort ist nicht immer die lauteste.",
      "Manchmal ist Abwarten eine Form von Klarheit.",
      "Dein erster Impuls ist Information, aber noch kein Befehl.",
      "Lass Gefühl und Fakten nebeneinander stehen.",
      "Die Antwort darf sich verändern, wenn du mehr weißt.",
      "Du musst nichts erzwingen, um voranzukommen.",
      "Ein kleiner Schritt kann mehr sagen als hundert Gedanken.",
      "Was würde dir morgen noch richtig erscheinen?",
      "Die Kugel sagt: mach die Frage kleiner.",
      "Achte auf das Muster, nicht nur auf den Moment.",
      "Es gibt mehr als eine mögliche gute Antwort.",
      "Vielleicht brauchst du gerade Orientierung statt Gewissheit.",
      "Was schützt deinen Frieden, ohne dich zu verstecken?",
      "Du darfst dir selbst Zeit geben.",
      "Nicht jede Unsicherheit verlangt eine sofortige Entscheidung.",
      "Die Kugel antwortet: bleib neugierig, noch nicht endgültig."
    ]
  },
  "en": {
    "yesno": [
      "Leaning yes — but only if you stay true to yourself.",
      "Leaning no. Not from this emotional place.",
      "Not yet. Put a little calm between you and the choice.",
      "Yes, if it feels calm rather than desperate.",
      "No, if it requires abandoning your boundary.",
      "The orb says: wait a little longer.",
      "A careful yes.",
      "A gentle no may protect you more right now.",
      "The answer is not ready yet.",
      "Yes — but smaller than you are imagining.",
      "No — not just to prove something.",
      "Maybe. First check what you actually need.",
      "The direction leans more yes than no.",
      "The direction leans more no than yes.",
      "Not today.",
      "If you still feel the same tomorrow, look again.",
      "Yes, as long as you do not lose yourself in it.",
      "No, if fear is the only thing pushing you.",
      "The answer sits somewhere between courage and patience.",
      "The orb asks you not to force it.",
      "A yes here needs calm.",
      "A no can also be an act of self-respect.",
      "Ask again when the inner noise is quieter."
    ],
    "decision": [
      "Choose the path where you do not abandon yourself.",
      "The quieter direction deserves more attention.",
      "Do not automatically choose what calms your fear fastest.",
      "Choose what will still fit you tomorrow.",
      "The better direction does not make you smaller.",
      "Notice where you can breathe more freely.",
      "Do not decide from guilt.",
      "What you choose from dignity usually carries farther.",
      "The orb points toward the path with less inner fighting.",
      "Do not choose the familiar only because it is familiar.",
      "The right direction does not need to feel dramatic.",
      "Take the option where you remain true to yourself.",
      "If a choice is made only of fear, give it more time.",
      "The gentler road is not automatically the weaker one.",
      "Notice what gives energy back to you.",
      "Do not choose just to prove your worth to someone.",
      "The answer lives closer to peace than pressure.",
      "Sometimes a pause is a decision too.",
      "You are allowed to make the choice smaller.",
      "Take the direction that respects your boundaries.",
      "What you do not have to force deserves another look.",
      "Choose from what is real, not only from what you hope.",
      "The orb says: clarity first, direction second."
    ],
    "comfort": [
      "Yes, it will become lighter again.",
      "Not instantly — but this will not feel exactly like this forever.",
      "You only have to make it through the next moment.",
      "The pain will not always be this loud.",
      "Getting through today can be very small.",
      "You do not have to understand everything right now.",
      "Take the day in small pieces.",
      "You are not required to be okay already.",
      "What feels heavy can slowly become lighter.",
      "A calmer moment will come again.",
      "You are allowed to let yourself be carried today.",
      "Even long nights end.",
      "The feeling is huge, but it is not endless.",
      "You do not need a perfect solution right now.",
      "It can hurt without hurting forever.",
      "Your heart is allowed to need time.",
      "You do not have to heal faster than you can.",
      "One small safe step is enough today.",
      "Everything may not improve at once — but something can.",
      "You can be tired and still be moving forward.",
      "This moment is not your whole future.",
      "You will not stand exactly here forever.",
      "The orb says: carry only the next small stretch."
    ],
    "love": [
      "Not every return would automatically mean healing.",
      "Watch behavior more closely than words.",
      "If you message them, do not do it from panic.",
      "What is real should not require endless guessing.",
      "Missing someone is not always a sign to return.",
      "The more important question is whether this connection is good for you.",
      "Love is allowed to be clearer than this waiting.",
      "You can love someone and still need distance.",
      "Missing them does not automatically mean you belong together.",
      "If only you are carrying the connection, that is information too.",
      "A return only matters if something has genuinely changed.",
      "You do not have to convince anyone to choose you.",
      "Love should not continually cost you your dignity.",
      "Notice how you feel after contact.",
      "Sometimes you miss the hope more than the person.",
      "Do not wait only for signs — watch actions.",
      "You can love without abandoning yourself.",
      "A real yes to you should not feel like endless decoding.",
      "The past can have been beautiful and still be over.",
      "If you write, write because you have something real to say — not just to quiet fear.",
      "Not every intense connection is a healthy connection.",
      "Your heart can feel while your boundary remains standing.",
      "The orb asks back: would the answer actually bring you peace?"
    ],
    "selfworth": [
      "Yes. You are enough even before you feel it.",
      "You do not have to prove your worth first.",
      "You can do more than your doubt currently allows you to see.",
      "A mistake does not make you a mistake.",
      "You may begin before you feel ready.",
      "Uncertainty is not evidence of inability.",
      "You are not too much.",
      "You are not worth less on a bad day.",
      "Your pace says nothing about your worth.",
      "You may be proud of small progress.",
      "You do not have to be perfect to be lovable.",
      "Your inner critic is not your résumé.",
      "Yes, you are allowed to trust yourself.",
      "You are enough without applause.",
      "You do not have to be understood by everyone.",
      "You are more than your last bad moment.",
      "Doubt and ability can exist at the same time.",
      "You are allowed to take up space.",
      "Your worth does not depend on whether someone chooses you.",
      "You do not need to become stronger before you deserve respect.",
      "Yes, you may believe in yourself, even cautiously.",
      "You are not required to make yourself smaller.",
      "The orb says: do not underestimate yourself today."
    ],
    "future": [
      "Not everything is visible yet.",
      "The next steps will bring more clarity than overthinking.",
      "Something is moving even if you cannot see it yet.",
      "The future is more open than your fear says.",
      "Nothing is final yet.",
      "Wait for facts before turning uncertainty into a story.",
      "The answer will arrive step by step, not all at once.",
      "Tomorrow can look different from today.",
      "Part of your future is still being built.",
      "Not every delay is a no.",
      "Some things take longer without being lost.",
      "The orb sees more than one possible path.",
      "Let the future remain the future for a little longer.",
      "What is truly coming will become clearer.",
      "You do not need to know today how everything ends.",
      "A new path may appear that you have not planned for.",
      "The next few days may bring information you do not have yet.",
      "Uncertainty is not the same as a bad outcome.",
      "There is still room for change.",
      "Your future does not belong to your worst-case scenario.",
      "Something may shift in your favor without being forced.",
      "The next clue matters more than a final prediction.",
      "The orb says: still open."
    ],
    "general": [
      "The answer may be closer than you think.",
      "Ask what makes you calmer, not only what gives quick relief.",
      "Not every question needs a final answer today.",
      "The orb points to the next small honest step.",
      "What is true can survive a calm look.",
      "You may already know part of the answer.",
      "Look at what is actually happening, not only what you fear.",
      "The clearest answer is not always the loudest.",
      "Sometimes waiting is a form of clarity.",
      "Your first impulse is information, not an order.",
      "Let feelings and facts stand beside each other.",
      "The answer may change when you know more.",
      "You do not have to force anything to move forward.",
      "One small step can say more than a hundred thoughts.",
      "What would still feel right tomorrow?",
      "The orb says: make the question smaller.",
      "Watch the pattern, not only the moment.",
      "There can be more than one good answer.",
      "Maybe what you need is direction rather than certainty.",
      "What protects your peace without making you hide?",
      "You are allowed to give yourself time.",
      "Not every uncertainty requires an immediate decision.",
      "The orb answers: stay curious, not final."
    ]
  },
  "pt": {
    "yesno": [
      "Tende para sim — mas só se continuares fiel a ti.",
      "Tende para não. Não a partir deste estado emocional.",
      "Ainda não. Deixa entrar um pouco de calma.",
      "Sim, se vier de tranquilidade e não de desespero.",
      "Não, se para isso tiveres de abandonar os teus limites.",
      "A esfera diz: espera mais um pouco.",
      "Um sim cuidadoso.",
      "Um não suave pode proteger-te mais agora.",
      "A resposta ainda não está madura.",
      "Sim — mas de forma menor do que estás a imaginar.",
      "Não — não apenas para provar alguma coisa.",
      "Talvez. Primeiro percebe do que realmente precisas.",
      "A direção inclina-se mais para sim do que para não.",
      "A direção inclina-se mais para não do que para sim.",
      "Hoje, ainda não.",
      "Se amanhã sentires o mesmo, olha de novo.",
      "Sim, desde que não te percas nisso.",
      "Não, se for apenas o medo a empurrar-te.",
      "A resposta está entre coragem e paciência.",
      "A esfera pede-te para não forçares nada.",
      "Um sim aqui precisa de calma.",
      "Um não também pode ser respeito por ti.",
      "Pergunta outra vez quando o ruído interior estiver mais baixo."
    ],
    "decision": [
      "Escolhe o caminho em que não te abandonas.",
      "A direção mais tranquila merece mais atenção.",
      "Não escolhas automaticamente o que acalma o medo mais depressa.",
      "Escolhe o que ainda fizer sentido amanhã.",
      "A melhor direção não te faz menor.",
      "Repara onde consegues respirar com mais liberdade.",
      "Não decidas por culpa.",
      "O que escolhes com dignidade costuma durar mais.",
      "A esfera aponta para o caminho com menos luta interior.",
      "Não escolhas o conhecido só por ser conhecido.",
      "A direção certa não precisa de parecer dramática.",
      "Escolhe a opção em que continuas fiel a ti.",
      "Se uma escolha nasce apenas do medo, dá-lhe mais tempo.",
      "O caminho mais suave não é automaticamente o mais fraco.",
      "Repara no que te devolve energia.",
      "Não escolhas para provar o teu valor a alguém.",
      "A resposta está mais perto da paz do que da pressão.",
      "Às vezes, fazer uma pausa também é uma decisão.",
      "Podes tornar a decisão mais pequena.",
      "Segue a direção que respeita os teus limites.",
      "O que não precisa de ser forçado merece outro olhar.",
      "Escolhe com base no que é real, não só no que esperas.",
      "A esfera diz: primeiro clareza, depois direção."
    ],
    "comfort": [
      "Sim, vai ficar mais leve outra vez.",
      "Não imediatamente — mas isto não vai sentir-se assim para sempre.",
      "Só precisas de atravessar o próximo momento.",
      "A dor não vai falar sempre tão alto.",
      "Hoje, sobreviver pode ser algo muito pequeno.",
      "Não precisas de compreender tudo agora.",
      "Leva o dia em pedaços pequenos.",
      "Não tens de estar bem já.",
      "O que pesa pode tornar-se mais leve aos poucos.",
      "Um momento mais calmo vai voltar.",
      "Hoje podes deixar-te amparar.",
      "Até as noites longas acabam.",
      "O sentimento é enorme, mas não é infinito.",
      "Não precisas de uma solução perfeita agora.",
      "Pode doer sem doer para sempre.",
      "O teu coração pode precisar de tempo.",
      "Não tens de curar mais depressa do que consegues.",
      "Hoje basta um pequeno passo seguro.",
      "Nem tudo melhora de uma vez — mas alguma coisa pode melhorar.",
      "Podes estar cansada e continuar a avançar.",
      "Este momento não é todo o teu futuro.",
      "Não vais ficar exatamente aqui para sempre.",
      "A esfera diz: carrega apenas o próximo pequeno trecho."
    ],
    "love": [
      "Nem todo o regresso significaria cura.",
      "Olha mais para o comportamento do que para as palavras.",
      "Se fores escrever, não escrevas a partir do pânico.",
      "O que é real não devia exigir adivinhação constante.",
      "Ter saudades não é sempre um sinal para voltar.",
      "A pergunta mais importante é se esta ligação te faz bem.",
      "O amor pode ser mais claro do que esta espera.",
      "Podes amar alguém e ainda assim precisar de distância.",
      "Ter saudades não significa automaticamente que devem ficar juntos.",
      "Se só tu sustentas a ligação, isso também é informação.",
      "Um regresso só importa se alguma coisa tiver realmente mudado.",
      "Não tens de convencer ninguém a escolher-te.",
      "O amor não devia custar-te constantemente a tua dignidade.",
      "Repara em como te sentes depois do contacto.",
      "Às vezes tens mais saudades da esperança do que da pessoa.",
      "Não esperes apenas por sinais — observa ações.",
      "Podes amar sem te abandonar.",
      "Um verdadeiro sim a ti não devia parecer uma decifração interminável.",
      "O passado pode ter sido bonito e ainda assim ter acabado.",
      "Se escreveres, escreve porque tens algo verdadeiro para dizer — não apenas para acalmar o medo.",
      "Nem toda ligação intensa é uma ligação saudável.",
      "O teu coração pode sentir enquanto o teu limite continua de pé.",
      "A esfera pergunta de volta: a resposta traria mesmo paz?"
    ],
    "selfworth": [
      "Sim. És suficiente mesmo antes de o sentires.",
      "Não tens de provar primeiro o teu valor.",
      "Consegues mais do que a tua dúvida te deixa ver agora.",
      "Um erro não faz de ti um erro.",
      "Podes começar antes de te sentires pronta.",
      "Insegurança não é prova de incapacidade.",
      "Não és demais.",
      "Num dia mau não vales menos.",
      "O teu ritmo não diz nada sobre o teu valor.",
      "Podes ter orgulho em pequenos progressos.",
      "Não precisas de ser perfeita para merecer amor.",
      "A tua voz crítica não é o teu currículo.",
      "Sim, podes confiar em ti.",
      "És suficiente mesmo sem aplausos.",
      "Não precisas de ser compreendida por toda a gente.",
      "És mais do que o teu último momento difícil.",
      "Dúvida e capacidade podem existir ao mesmo tempo.",
      "Podes ocupar espaço.",
      "O teu valor não depende de alguém te escolher.",
      "Não precisas de ficar mais forte para merecer respeito.",
      "Sim, podes acreditar em ti, mesmo com cautela.",
      "Não tens de te diminuir.",
      "A esfera diz: hoje não te subestimes."
    ],
    "future": [
      "Ainda não está tudo visível.",
      "Os próximos passos vão trazer mais clareza do que pensar sem parar.",
      "Alguma coisa está a mover-se, mesmo que ainda não consigas vê-la.",
      "O futuro está mais aberto do que o teu medo diz.",
      "Ainda nada é definitivo.",
      "Espera pelos factos antes de transformar incerteza numa história.",
      "A resposta vai chegar passo a passo, não toda de uma vez.",
      "Amanhã pode parecer diferente de hoje.",
      "Uma parte do teu futuro ainda está a ser construída.",
      "Nem todo atraso é um não.",
      "Algumas coisas demoram mais sem estarem perdidas.",
      "A esfera vê mais do que um caminho possível.",
      "Deixa o futuro continuar a ser futuro por mais um pouco.",
      "O que realmente vem vai tornar-se mais claro.",
      "Não precisas de saber hoje como tudo termina.",
      "Pode aparecer um caminho novo que ainda não planeaste.",
      "Os próximos dias podem trazer informação que hoje ainda não tens.",
      "Incerteza não é o mesmo que um mau resultado.",
      "Ainda há espaço para mudança.",
      "O teu futuro não pertence ao pior cenário da tua cabeça.",
      "Algo pode mudar a teu favor sem teres de forçar.",
      "A próxima pista importa mais do que uma previsão final.",
      "A esfera diz: ainda está em aberto."
    ],
    "general": [
      "A resposta pode estar mais perto do que pensas.",
      "Pergunta o que te traz calma, não apenas alívio rápido.",
      "Nem toda pergunta precisa de resposta definitiva hoje.",
      "A esfera aponta para o próximo pequeno passo honesto.",
      "O que é verdadeiro aguenta um olhar tranquilo.",
      "Talvez já conheças uma parte da resposta.",
      "Olha para o que realmente está a acontecer, não apenas para o que temes.",
      "A resposta mais clara nem sempre é a mais barulhenta.",
      "Às vezes esperar também é uma forma de clareza.",
      "O primeiro impulso é informação, não uma ordem.",
      "Deixa sentimento e factos existirem lado a lado.",
      "A resposta pode mudar quando souberes mais.",
      "Não precisas de forçar nada para avançar.",
      "Um pequeno passo pode dizer mais do que cem pensamentos.",
      "O que ainda te pareceria certo amanhã?",
      "A esfera diz: torna a pergunta mais pequena.",
      "Observa o padrão, não apenas o momento.",
      "Pode haver mais do que uma boa resposta.",
      "Talvez precises de direção, não de certeza.",
      "O que protege a tua paz sem te esconder?",
      "Podes dar tempo a ti própria.",
      "Nem toda incerteza exige uma decisão imediata.",
      "A esfera responde: mantém a curiosidade, não a certeza."
    ]
  }
};

let busy = false;

function normalizeText(value){
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}


function detectInputLanguageCore(text){
  const n=normalizeText(text||"");
  const en=["i am ","i'm ","im ","i feel ","my ","me ","can't ","cant ","don't ","dont ","frustrated","sad","angry","worried","happy","confused","nervous","lonely","jealous"];
  const pt=["estou ","sinto ","me sinto ","nao ","não ","tenho ","meu ","minha ","muito ","muita ","triste","zangado","zangada","preocupado","preocupada","feliz","frustrado","frustrada"];
  const de=["ich ","mir ","mich ","mein ","meine ","bin ","fühle ","fuehle ","nicht ","sehr ","traurig","wütend","wuetend","ängstlich","aengstlich","frustriert"];
  const score=(arr)=>arr.reduce((s,x)=>s+(n.includes(normalizeText(x))?1:0),0);
  const scores={en:score(en),pt:score(pt),de:score(de)};
  const best=Object.entries(scores).sort((a,b)=>b[1]-a[1])[0];
  return best[1]>0?best[0]:"de";
}

function findExternalEmotionCore(text,lang){
  const n=normalizeText(text||"");
  const pack=lang==="en"?(window.EMOTION_EN||[]):lang==="pt"?(window.EMOTION_PT||[]):[];
  for(const item of pack){
    const words=item[1]||[];
    if(words.some(word=>n.includes(normalizeText(word)))){
      return item[2]||null;
    }
  }
  return null;
}

function detectTheme(text){
  const normalized=normalizeText(text);

  for(const [theme,profileKeywords] of emotionProfiles){
    if(profileKeywords.some(keyword=>normalized.includes(normalizeText(keyword)))) return theme;
  }

  for(const theme of ["heartbreak","anxiety","lonely","burnout","selfdoubt","worthless"]){
    if(keywords[theme].some(keyword=>normalized.includes(normalizeText(keyword)))) return theme;
  }

  return "general";
}


function isHighRiskQuestion(text){
  const n=normalizeText(text||"");
  const terms=[
    "suizid","selbstmord","mich umbringen","mir etwas antun","mir was antun","nicht mehr leben",
    "suicide","kill myself","hurt myself","self harm","self-harm","don't want to live","dont want to live",
    "suicidio","suicídio","matar-me","me matar","fazer mal a mim","nao quero viver","não quero viver"
  ];
  return terms.some(term=>n.includes(normalizeText(term)));
}

function isQuestion(text){
  const t=(text||"").trim();
  const n=normalizeText(t);
  if(!t) return false;
  if(t.includes("?")) return true;

  const starters=[
    "soll ","sollte ","kann ","könnte ","koennte ","darf ","muss ","bin ","ist ","war ","wird ","kommt ",
    "wie ","was ","warum ","wann ","wer ","wo ","welche ","welcher ","welches ",
    "should ","can ","could ","may ","must ","am ","is ","are ","was ","will ","would ","does ","do ",
    "how ","what ","why ","when ","who ","where ","which ",
    "devo ","posso ","será ","sera ","vai ","vou ","é ","e ","como ","o que ","porque ","por que ","quando ","quem ","onde ","qual "
  ];
  return starters.some(start=>n.startsWith(normalizeText(start)));
}

function detectQuestionType(text,lang){
  if(!isQuestion(text)||isHighRiskQuestion(text)) return null;
  const n=normalizeText(text);

  const hasAny=(terms)=>terms.some(term=>n.includes(normalizeText(term)));

  const decisionTerms=lang==="en"
    ?[" or ","which should i","which one","choose between"]
    :lang==="pt"
      ?[" ou ","qual devo","qual escolher","escolher entre"]
      :[" oder ","welches soll","welche soll","was soll ich wählen","was soll ich waehlen","entscheiden zwischen"];
  if(hasAny(decisionTerms)) return "decision";

  const comfortTerms=lang==="en"
    ?["will it get better","how do i get through","how can i cope","how do i survive","will this pass","how do i handle this"]
    :lang==="pt"
      ?["vai melhorar","como aguento","como vou aguentar","como superar","isto vai passar","isso vai passar","como lidar"]
      :["wird es besser","wie halte ich das aus","wie überstehe ich","wie ueberstehe ich","geht das vorbei","wie komme ich da durch","wie soll ich das schaffen"];
  if(hasAny(comfortTerms)) return "comfort";

  const loveTerms=lang==="en"
    ?["should i text him","should i text her","should i message him","should i message her","will he come back","will she come back","does he miss me","does she miss me","does he love me","does she love me","was it love","was it real","are we meant"]
    :lang==="pt"
      ?["devo escrever para ele","devo escrever para ela","devo mandar mensagem","ele vai voltar","ela vai voltar","ele sente a minha falta","ela sente a minha falta","ele me ama","ela me ama","foi amor","era amor","foi real"]
      :["soll ich ihm schreiben","soll ich ihr schreiben","soll ich ihm texten","soll ich ihr texten","kommt er zurück","kommt er zurueck","kommt sie zurück","kommt sie zurueck","vermisst er mich","vermisst sie mich","liebt er mich","liebt sie mich","war das liebe","war es liebe","war das echt","gehören wir zusammen","gehoeren wir zusammen"];
  if(hasAny(loveTerms)) return "love";

  const selfworthTerms=lang==="en"
    ?["am i good enough","am i enough","can i do this","will i manage","am i too much","do i deserve","am i capable"]
    :lang==="pt"
      ?["sou suficiente","sou boa o suficiente","sou bom o suficiente","consigo fazer isto","vou conseguir","sou demais","mereço","mereco","sou capaz"]
      :["bin ich gut genug","reiche ich","schaffe ich das","kann ich das","bin ich zu viel","verdiene ich","bin ich fähig","bin ich faehig"];
  if(hasAny(selfworthTerms)) return "selfworth";

  const futureTerms=lang==="en"
    ?["will ","when will","future","tomorrow","soon","what happens next","is it going to"]
    :lang==="pt"
      ?["vai ","quando vai","futuro","amanhã","amanha","em breve","o que acontece depois","será que","sera que"]
      :["wird ","wann wird","zukunft","morgen","bald","was passiert als nächstes","was passiert als naechstes","kommt ","werde ich"];
  if(hasAny(futureTerms)) return "future";

  const yesNoTerms=lang==="en"
    ?["should i","can i","could i","may i","must i","is it","are we","does ","do i","would it"]
    :lang==="pt"
      ?["devo ","posso ","tenho de","é ","e ","será ","sera ","vale a pena"]
      :["soll ich","sollte ich","kann ich","könnte ich","koennte ich","darf ich","muss ich","ist es","sind wir","würde ","wuerde "];
  if(hasAny(yesNoTerms)) return "yesno";

  return "general";
}

function chooseQuestionAnswer(text,lang){
  const type=detectQuestionType(text,lang);
  if(!type) return null;
  const pack=questionResponses[lang]||questionResponses.de;
  return chooseLine(pack[type]||pack.general);
}

function highRiskReply(lang){
  if(lang==="en") return "This is too important for a random oracle answer. Please stay with another person and reach out for immediate human help now.";
  if(lang==="pt") return "Isto é demasiado importante para uma resposta aleatória da esfera. Fica com outra pessoa e procura ajuda humana imediata agora.";
  return "Das ist zu wichtig für eine zufällige Orakel-Antwort. Bleib jetzt bei einem anderen Menschen und hol dir unmittelbar menschliche Hilfe.";
}

function chooseLine(lines){
  return lines[Math.floor(Math.random()*lines.length)];
}

function wait(ms){return new Promise(resolve=>setTimeout(resolve,ms))}

function ensureAudio(){
  const AudioCtx=window.AudioContext||window.webkitAudioContext;
  if(!AudioCtx) return null;
  if(!audioContext) audioContext=new AudioCtx();
  if(audioContext.state==="suspended") audioContext.resume().catch(()=>{});
  return audioContext;
}

function playCreak(){
  const ctx=ensureAudio();
  if(!ctx) return;
  const now=ctx.currentTime;
  const gain=ctx.createGain();
  gain.gain.setValueAtTime(0.0001,now);
  gain.gain.exponentialRampToValueAtTime(0.14,now+0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001,now+1.25);
  gain.connect(ctx.destination);
  [0,0.24,0.49].forEach((offset,index)=>{
    const osc=ctx.createOscillator();
    osc.type=index===1?"square":"sawtooth";
    osc.frequency.setValueAtTime(540-index*70,now+offset);
    osc.frequency.exponentialRampToValueAtTime(150+index*25,now+offset+0.46);
    osc.detune.setValueAtTime(index*11,now+offset);
    osc.connect(gain);
    osc.start(now+offset);
    osc.stop(now+offset+0.5);
  });
}

function playBoom(){
  const ctx=ensureAudio();
  if(!ctx) return;
  const now=ctx.currentTime;
  const master=ctx.createGain();
  master.gain.setValueAtTime(0.72,now);
  master.gain.exponentialRampToValueAtTime(0.0001,now+1.35);
  master.connect(ctx.destination);

  const low=ctx.createOscillator();
  low.type="sine";
  low.frequency.setValueAtTime(115,now);
  low.frequency.exponentialRampToValueAtTime(34,now+0.7);
  low.connect(master);
  low.start(now);
  low.stop(now+1.1);

  const buffer=ctx.createBuffer(1,Math.floor(ctx.sampleRate*0.32),ctx.sampleRate);
  const data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++){
    data[i]=(Math.random()*2-1)*Math.pow(1-i/data.length,2.4);
  }
  const noise=ctx.createBufferSource();
  noise.buffer=buffer;
  const filter=ctx.createBiquadFilter();
  filter.type="lowpass";
  filter.frequency.value=900;
  noise.connect(filter);
  filter.connect(master);
  noise.start(now);
}

function makeSparks(){
  sparkLayer.innerHTML="";
  const rect=sparkLayer.getBoundingClientRect();
  const cx=rect.width/2;
  const cy=rect.height*0.42;
  for(let i=0;i<30;i++){
    const s=document.createElement("span");
    s.className="spark";
    const angle=Math.random()*Math.PI*2;
    const dist=45+Math.random()*135;
    s.style.left=(cx+(Math.random()*26-13))+"px";
    s.style.top=(cy+(Math.random()*18-9))+"px";
    s.style.setProperty("--dx",Math.cos(angle)*dist+"px");
    s.style.setProperty("--dy",Math.sin(angle)*dist+"px");
    s.style.animationDelay=(Math.random()*0.22)+"s";
    sparkLayer.appendChild(s);
  }
}

function clearRitualTimers(){
  ritualTimers.forEach(clearTimeout);
  ritualTimers=[];
}

function revealOrbLine(text){
  answer.classList.remove("line-reveal");
  void answer.offsetWidth;
  answer.textContent=text;
  answer.classList.add("line-reveal");
  orb.classList.add("has-answer");
}

async function swapFrame(src,alt){
  orbArt.classList.remove("frame-swap");
  void orbArt.offsetWidth;
  orbArt.classList.add("frame-swap");
  orbArt.src=src;
  orbArt.alt=alt;
  await wait(760);
  orbArt.classList.remove("frame-swap");
}

function resetRitual(){
  clearRitualTimers();
  orb.classList.remove("wild-glow","box-mode","seal-glitter","slam");
  orbArt.src=ORB_IMAGE;
  orbArt.alt="Magische Kugel";
  answer.classList.remove("line-reveal");
  boxInputWrap.classList.add("hidden");
  boxInputWrap.classList.remove("visible");
  boxSecret.value="";
  sealButton.disabled=false;
  secretNote.classList.remove("fly-in");
  secretNote.textContent="";
  sealedMessage.classList.add("hidden");
  sealedMessage.classList.remove("visible");
  thoughtWrap.classList.remove("hidden");
  hint.classList.remove("hidden");
}

async function openSecretBox(){
  busy=true;
  orb.classList.remove("wild-glow","has-answer");
  answer.textContent="";
  answer.classList.remove("line-reveal");
  thoughtWrap.classList.add("hidden");
  hint.classList.add("hidden");
  orb.classList.add("box-mode");
  playBoxOpenSound();
  await swapFrame(BOX_OPEN,"Geöffnete magische Box");
  boxInputWrap.classList.remove("hidden");
  requestAnimationFrame(()=>boxInputWrap.classList.add("visible"));
  await wait(750);
  boxSecret.focus();
  busy=false;
}

function startHiddenReflection(){
  clearRitualTimers();

  ritualTimers.push(setTimeout(()=>{
    orb.classList.add("wild-glow");
    makeSparks();
  },FIRST_ANSWER_VISIBLE_MS-2000));

  ritualTimers.push(setTimeout(makeSparks,FIRST_ANSWER_VISIBLE_MS-1200));
  ritualTimers.push(setTimeout(makeSparks,FIRST_ANSWER_VISIBLE_MS-450));

  ritualTimers.push(setTimeout(()=>{
    playReflectionLoadingSound();
    orb.classList.remove("wild-glow");
    thoughtWrap.classList.add("hidden");
    hint.classList.add("hidden");
    orb.classList.remove("has-answer");
    answer.textContent="";
  },FIRST_ANSWER_VISIBLE_MS));

  reflectionLines.forEach((line,index)=>{
    const delay=REFLECTION_START_DELAY_MS+(index*REFLECTION_LINE_GAP_MS);
    ritualTimers.push(setTimeout(()=>{
      revealOrbLine(line);
      if(index===1||index===3) makeSparks();
    },delay));
  });

  const boxOpenDelay=
    REFLECTION_START_DELAY_MS+
    (reflectionLines.length*REFLECTION_LINE_GAP_MS)+
    BOX_OPEN_EXTRA_DELAY_MS;

  ritualTimers.push(setTimeout(()=>{openSecretBox()},boxOpenDelay));
}

async function cast(){
  if(busy||orb.classList.contains("box-mode")) return;
  unlockBoxOpenSound();
  const text=thought.value.trim();
  if(!text){thought.focus();return}

  ensureAudio();
  playOrbLoadingSound();
  busy=true;
  resetRitual();
  answer.textContent="";
  orb.classList.remove("has-answer");
  orb.classList.add("casting");
  makeSparks();

  await wait(1700);
  orb.classList.remove("casting");
  const lang=detectInputLanguageCore(text);
  if(isHighRiskQuestion(text)){
    revealOrbLine(highRiskReply(lang));
  }else{
    const questionLine=chooseQuestionAnswer(text,lang);
    if(questionLine){
      revealOrbLine(questionLine);
    }else{
      const externalLines=findExternalEmotionCore(text,lang);
      if(externalLines){
        revealOrbLine(chooseLine(externalLines));
      }else{
        const theme=detectTheme(text);
        revealOrbLine(chooseLine(responses[theme]));
      }
    }
  }
  busy=false;
  startHiddenReflection();
}

sealButton.addEventListener("click",async()=>{
  unlockBoxCloseSound();
  let secretText=boxSecret.value.trim();
  if(!secretText){boxSecret.focus();return}

  ensureAudio();
  sealButton.disabled=true;
  boxInputWrap.classList.remove("visible");
  await wait(500);
  boxInputWrap.classList.add("hidden");

  await swapFrame(BOX_MESSAGE,"Deine Nachricht wird der magischen Box übergeben");
  secretNote.textContent=secretText;
  secretNote.classList.remove("fly-in");
  void secretNote.offsetWidth;
  secretNote.classList.add("fly-in");
  await wait(1750);
  secretNote.classList.remove("fly-in");
  secretNote.textContent="";
  boxSecret.value="";
  secretText="";

  orb.classList.add("slam","seal-glitter");
  orbArt.src=LOCK_IMAGE;
  orbArt.alt="Verschlossene magische Box";
  playBoxCloseSound();
  if(navigator.vibrate) navigator.vibrate([90,40,170]);
  makeSparks();
  ritualTimers.push(setTimeout(makeSparks,320));
  ritualTimers.push(setTimeout(makeSparks,680));
  ritualTimers.push(setTimeout(makeSparks,1040));

  await wait(2200);
  orb.classList.remove("slam","seal-glitter");
  sealedMessage.classList.remove("hidden");
  requestAnimationFrame(()=>sealedMessage.classList.add("visible"));
});

orb.addEventListener("click",cast);
thought.addEventListener("keydown",event=>{
  if((event.ctrlKey||event.metaKey)&&event.key==="Enter") cast();
});
