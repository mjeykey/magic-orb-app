const orb = document.getElementById("orb");
const answer = document.getElementById("answer");
const sparkLayer = document.getElementById("sparkLayer");
const thought = document.getElementById("thought");
const thoughtWrap = document.getElementById("thoughtWrap");
const orbArt = document.getElementById("orbArt");
const secretNote = document.getElementById("secretNote");
const sealCaption = document.getElementById("sealCaption");

const ORB_IMAGE = orbArt.src;
const BOX_OPEN = "data:image/webp;base64,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";
const BOX_MESSAGE = "data:image/webp;base64,UklGRloYAABXRUJQVlA4IE4YAAAQWQCdASqgAKAAPtVaoE8oJaMiO30/aQAaiWgAxJQTrGeyQyTGR24/p9S+4055VxqfAf9R/TvEnyiRIcK/avqHeE+M3e78xNQvEz/b9rVvv++9BS1R1d/GHSN4FlAnybP+Hyqah39oUE9C2Ts+lVdBO213QK1wfvP78lN6ZoPd18abQ8+Lcf/iHbbxqU7wd9DQFj/X7vldZwqSgIAOy5JUN1Z5DX3jpW6kj0HHMTDkla1pPf7nO+wzdF/YGmuENLvjgXUbJb7edmt6jOO3zlBIPTNNuFFrhoIcmw1LcQsFx6gOyaNK/0w8xEiX0ssxf12zo4vnFTOLCWQseglLqZsEjG8bIKMTxAintmjyIbnDautZkOIS3fRs9kBY0Gd7eAhpuXtV/SuaDrsFiYVuLaAeYluI7QSBKCODQV3sjOtF7LmSLbRZyrJDMkPzd5tDXl91mFGkHTmmmNHEwTKRh5+Ek7e3JETRTGt/UrOE4t/meX7D+2l8RRcsCtiBWHiJUOFt/cW/vCkGtkTGrEYmDUFOfgmzCqBiO4GXKQRg/UjewI064oXwbavBj823kUg0YFLXJNayh3U/psSNAGOwDRT/nKCQ1+JLZPE+nK1/9UFMwuZ//qrEU6+rdw5EmS8t4+9aS7GsNHpId3rEPj0eLsgPGC7ckbuX1TIPYyCjuJ7WeWoIik/rDPZwS7RDnXIgzF27y/q8zdUqy2uQGs7xz7E71FrcWVoZBdv0QtgX6ocWydK0ZKNo04yzu5cUOhnU1L+S8Z+FKP+xUOj3ztVPo/+wdWutW2HtIly0kwiP8RvI0PnK/CI3tNjH8NRg7uyG5DsIO0O3xVwFWOd6jU9ee1aFpVsWj996VSPc03LutoT4e79y3ITyN8X9eGfZWwMP40TKKsWtn8ESty4HpOWTx/cjimOZu+RwcQHdTdA6x765iuNiv3OeSsR09o11v59jvPgAANE15SD7gBFDFx6KO1YJ+ug81tjfgA1UWXjGgkKbyrdPbcKKszJv2jm+KvqlUfd9FNMDR4DYXTWI59fMFm2qj3JTHTjfoz+qb2LutB0C6O65r1ueSZ59E+3fflgW/kQ8y4oloR7OI4s5fox3FvWQ+ldu7lUXko/cbHs2yIeS4ozH+7Aa1+Ih7AuqWnpT/Y1GhKxAEhNg7rFaMfXl+1rxmvPf6jEL6xmbqf2SRVCj/QFFe4JhMCo63mV/FZzDNPRGyHbvTzkE2Iolu8m9L7kYaaSZ2KJk8Ct++PeY/WU0+EebD9F/sTbTwjG6RQWc/zBUFzBBkNN2M2lt0JR1qjMm/4hCSP+XYnvmhv5EAlEVIR9szwKyAciRFEnE6j8DxlfYPWZ0JuMZEJoIlzCvUzAJehijy1rdv4pgC43JD3441sTp1BZ2+MWXdR0GsE+P4Y4kGnQZpK7SJvnohAHGWUNPUjIBnNiloQFSka3sCEzu1KB7i3JIaDxgP13AGlOnefHAVf3ZSx3tS0y8u1gviUcLjGeKMBZrPqqtJthWGorkjoeS9z2ZqwKvZUikuf2V24z4t1Ve6wZ4hstVBl0Gv3SJuasjVVLwAOw00izWJG3UajE/sh4O2AEYzlcLjfCwfcumyLmbmBbgVzhySydgwqHM43ZB3G8Ta4WTiMOmQGHN1jbfSah9x71vRgX3ftiMUSPBOT+3wICFN6tIRKpI73MB4c4ApAKE3B+nxiEK9Ru+twZD3wXbNrz6gauuP6DGaxoU/V+rcLyfcf1SRq1+pdTYWsoQpVnywtpCgVT4x4WeX+3BNOS3Hjv6ZTGPAieeGTtMIfR2iBEUtOwzkk7Q/8jKdIRrGyE1OhU/+V8d9lcQ4b6LbYXbECfe0Og6o/6CRoOelE9L08Pge4qAn9rqBBmh3UKz5nOsB6tnnt41oO04LhMaHhYlCV9L4gpQ0ge7QlCcvGasQIHToz2cLmAoMil47FolJ5nLU822f6ZlBGq2zyCiJ9u6bTF7OVeVJHEuhTDYSQ+e2uohahFCISDeipvhcTVhnO0ZPT9U9xfd8bSiRWn1ATUAWjZfA8zfbf1vX9Q8w95RipIaU1lWqJmz7DhJSc5Adj7CmrMalzcfRpOhr8z8d+8OwhxioobwwH0uZ0RMqi8H1784aUWzMiw4hyIsdrdwCGs5XiwXCrcmEvtX17tvbxCHcItfJn74C2W24YtEy4QgGtfpYgxcUhmzsfCntm3ywhkkZ/qToHtz+9v6DO+1hnNZ3b5z54UM6lddhh+LoYu6bYMQ2+3PMykzqAYq6ShbNaJm73X7ZoFzARdPsu4+pDMDloEjiJsvorcFoVgG3+ExY92TWFlUCcsES3ZqJdndG57IMmkD+ouSoh3icCmlxUVDUPhkTy/VdH/8CzBp4d6uGQZ58mozhzrG/NpGr0OyguIkA11mwO4NE/tRrRzirKjM3fLifCef6V9CQcueIETFRXYPnk61iodEaUhuQKkfjWSv8zsKBQHcbAI7JYQ9qcxSBcuv4EqJ67SG33Ot3+Zh3X/vBuISx0Ny3ilzxym06QVTXODh5CaJpYdsUOX51B+uWsUUPQ2UHpzGsiaF1rDZFDfR312Etm5lnRrAaLm343bs4iR+B1iIFgOpxi4t1aXr5Ap9qsVgM1j6ZwcB+4WlBL3YIPH3RMwHVq4ieM5e4j3+mD/wSAozZipRo45Zps9LYioJ4Cko9heHZMpXFnMW0WEU//3W1HBNumzC7TklrwTahgYvPEXhzyFJbfNBviTci7J6APmE9J9d8ukGFIJHvxEnP1P1gstYxh+q5mQFOzdupkXYR+J/uQYwMrUdYxJnVP2u6xE2jH4fhFJh+8YupFcb+7uVD+Js51JGRxmAcfRQOISS5aRBqMEybKlKOd7Yh8F5yX6NHwfVqSpaPOz94vMR33i4wa5RS1Z/5oyCMvwCuWwc4Q/ymVmOsko8GsTgg3W/wDwQRlYepsVJyxhfiPF7JQ9WlKRjBi9X+an0zCn7iKaCCq9naJFFfv/mYB4v8+4RKeGkELEzF7Vcgs868euQWZS25HS3fVBmqXRFZx8ToJCVZjVKtHkyDHagbg39Pcmio1epdOFXrAP+/YyO/T4TEBo/9YXEtYV20CbAZ5dQ9BDggd1W34No/5rPRwoKRDvZxafBveI8+adYWh4x1HiSEDCj4RlsRoxvodsCHBikXJrJJOy2nM18DYOEAgclAVr0aVQpzHebd/v8ESzQVM1CIsvpmCZzaT3SLVsrt+JQbeIfyt9oNksIvBmAeUcMd7RUZUq1TMaCHNSetBWLnPb97BRqXmFM/z0XSABlM4IuD87YTdVYRve2UiXf9SlKjBMtXhve4ZSadqEDe46j4Ym11wykmD2EJnQUvlL1Y1iPQ0S8pwrtZbED/vd0q1jR+vpl6G7xfvKdULYK0h4mMFe8pOvy1MLSqXN7PbR5mf3CyuFx+kaU7naM6yqthlhZLTJCqqXIypmzSO8zHsj/dzOAc7bFxh2tY5DDhk/rVcKia7uu+33paJh1/YQJAu+frJVKv6we8nhzgHmWUiSwxT8MAvn21ifeykIGwppZUqCOBd6PR5ow8jGUUKFL8SpGOxWvfnd8XU3kLA7kNiu6+kO8pj2fJTKom2VJB3XCgHAPRBOchWJXMR2eKJmhNXnLfcJPAyli3j84BbmBenBsAc256f6faJMmXGdr1uDLCxk8qoGB6VDKUXGYkE9c1RNZAw/ptAym7l2Xyw0mKoM8tPKuLzptTxeIaisqUEXu+o7x2Yd3Ath5xuMe1MNCgYZBzkna9PAmXV4+efaeGHS/8bZGz68y7rNvuve+fla5G6kA1TDZ6Q4pN9Jko+FKKHcSJW1zr7kTTTviTladGgrKjgE/5pSxQvTlzc/vC10OzU+SbYK4m9Z1c4f4bWm0yXlEMaaiBpMwCqLmoh0W6b09gsTmbwZqJhLmQ05VgWQtDLg60qd9DQi/pjzIsSigStS4n6MlQ/B8bf5t0dIsOlOawrlxfdLH9xqrRvL+fQDB2I/G+yRiDLATZlRx+b0Y5EHp283M638sFMUHJKSRFjT2D4HCu+oCQ61xQv/9BwkGHWWqaVrhlycSrTO1s/QEgKvkpnv2bjLLaGA31PAmVn598/KpSqUZOTNCa9UBzKIQ2y+EDer0jjZPvTp384Mgzx1YFUnIJqgiKN0bCv/CICg3WEgs/YcoAD3iPTihjHiGMuY8TEYzvyJVF4ftEjrRolkW9wqR6rbL/aXlIZrS/bhPK68Yii1MGaBY/dy4l9UVGpVoXhAD68dD8bKhbKH5lGpBt7Il4bwKl/tQbU6Lfu9VVfnb1y+P/5KfHJYn+suNPXuUTQQJRCVET9AyJ1Znijz2bu1pA3KBq+Iz1GKjyc4PJyLLjSQ6SP2BL0esA13+4IDOSVZr8TxVWqL+plE9iF2IBUGomKpk3cRtOT31swZyB7a2KqM+iDAlkiA8wQT5PqBLj+m+C12eQTSteogHoRytmfIMbljUhWFPWVaz4IF8g2ai3SS0eMS2+IpdK1rGJwzMP6GjH/Y5+bbaEAXLO6QchlCT/9f3chvxegoAQMx1MbmMeYq0BGEAXt+LMTNW6NPkc2S0elbYrbKKGIQ0QBflfsxiHG4tbvhsG4ijOpvxp8rLdVvI6AGNMu3XCNPnrRd7u7CwZyltkE0Dv57/kv3EI3EspbVwiWdiDdH5sQilPTAGwsFNyqj7Ti2qpCR1yAqWf0aVbh0KYfYf7boyVSkJpG//FFFISFdM3EC4ofEE9pmcLU5bzxAFush5zje+Id1PZzky+yd/eaw5vcr2L1FHfvHSeBdc1WkIB4qoH3vPhdjshnOU4Ae0WYsietKKg565u2LHLC3pH5ZKLDt/HROclQ2eqN8uxQKbY5FYPfQ0mZO8qhAwS88YYxczPNR1zP2OjnAGF7mJxB0RZXPpCBy8huxbw+xmEajDwu4J66EH30Xak+nzHIYpieV38OJMYXLDjlatBQ5o6v/vsaYMVf0WPvbejM9nokI2bD8vwx7qpJ3eYO9rAYaxrX7QYE/Ima80Alq/RQjVUeanLqm9ItcUwYtVtJsoc8HEpNF9sBe14Xf/4NdZSQkNK5Cm7Z66YSO+hf4jphOl1II4KsE3O6C1+Ly7IH/rHnXBJ6D0Yzd/2D3gOAjzZjD6yOyno3tgTz52jxZDzRwepxyF5464gNliVNMfr68aC3t/BS5uffIwwTKzVEborXNbDm8C1mcC4vWUBWtsJXf7gvwKoueKeRUi4DYBRLL0bxD5tvybVSyXxbUd4lRvJxb5xMk3M/yyK1SDkx+xwaYmCdfuJVVeyPZp2Zt0w2pynvN4ZT7mE5rbEADciPfOBllXjuh2RYa0SQi7fPw5uBJJdyTn9/R5tkh1ozLbBX4Jy7qmKIMEeScXPq0JGLADuK1q2ALO9r/rgvq4gZsFGr495IDy6V6QTadj3EQuz2LIeMKEc/Fd91Qp81yW1LSfU7fzFPUVJdLsIl9FvSwX5EDadTl+tcJohPbSP7T9rIcCR9gKUWvo565u8Mewcektfv/xKbA/Uate99pxtHp02FY0N53aEbNNyStUIpj71GLLMWoVwapIaUDmJyPsRuwm84foHiHLAVaz2dGjj+hppLt+YbPSMwTxbrAure2o/Kl1uUfbDNzLqOza1zsGmuQDXFFj8WaILYxtyesVv5JpkwN9ogSF5B/YbEgZEoVlqog3DPIQDOGI5w4Bp7FcwIN0c+bjiyVjCYFdY+i6YV84eCCUhzqPEWregCdh1vYC0T1O35sDSxtalmgoPmXfF4PF5rYKRKYTH2zRv58AN2G5ch2ixHR1MoLZvYXwnI2U0KHyB4LE9ZZwkqL2/kZi/YQLDLDBI1zNVQtPmh4vQUTLVuwAQGpTTD/zp6fnCZSyLlpiPmxfD2zWAroM/yfB9QI/Ge2e/IEhi38uV9B26azhsZq1QNFbelOa+8bcVJ9APhQKMUKBYZOooH90EJwDIglnN822ChANHEwWICCU2EVGmiUDtdzyYS5kdyrYuL/Op7lNaS/Ac1QSyIEK47bAKZeQ7qmKfT7eJrmvagp1D9nwxB8Kk2KapvWVAa2OmHLc7rv7us7BeaDgLj96Ve0nL/jcqwY8wa85J77Qxgu0+pjtwaZoJ8RjJ1Lx6B/ZHyof8kfMNPc0SWpmoU7XNlzlVBXGjUjTn0JZtFxFg9GGF//ykqp+Zw1b9hRd4GasA7FjF1Hzk5yT3Cx1XmurbI29Mzj4JcRkJ/y849T+OHtRoWVzfQIhYblBGXMvg5R04WevFpbLh8JmF6HlapuprGOLJ4Iu8CaRkFz7oUVa65CKvfOiQGECB0S7sDVxqQyx3R62juLgn8SSZwwNzMPYS9IaAKd+DKMHYAmDcb3RvKAMmzVC6gA7wzlndOVHJ1kpzIgI2v4gWpFP/mQNpqD62Y1kaVTe7xZnuZZiuHtCeWACJZbNEmIjYTKejJDLeZXMjwZ2u29dIt/ZHxCayrgt+bUqMN6EwzVnQSbkgaw1XR3uSLPMrZfwiwCZ0hnDmHH5xCbAC4BmdqaVdDG/o9X+86pi6qRWUnh9ihYAwjFTwZEOanWbIQKiK+L9yod4Xo1CF7s+1YQHg9OPwempwBVEgYfhLSr/yABp4PkZIAkWQp1Tc0I87qCAI+15JufskFthyHjsYteWUkER5UxcwVgW685Rz+0gUr84R6lc5toqwPkwU+ZW9PDealzfTu4J95UnFjVcgYKjSntFoMvf+3jKeacAUQf1q+1xTQbsS2Wd+6WM1GXk7EDdpg+Cd5nmXRIRp5AAOrvaeGT+J98wAFhhin0Pl0c5lJKXgiyzTi+szzUcXGJoYkDDGvdtgGHiBpYkTmTk5Yrr28d49kF1OwEd4Fy5H9gv1pBSKjufgL7hIwN4h0jzyCk3c0jomeaNkNK1WcE7pkHxQ++kfaPUA9MBy/kre5BwHFDwG0bE5QYEzTbdDgUc2UBHPU1hhEo/lvVuXFJGDBwODZagweqTL6UNZPOyzD6a0bbuN5isKBhlvsUhHXnCexkADsL7IjnZr5NjrSQ2wvqZ1jRR8lOltmjYQYWCQbciMANRM0g0TOv3gW91GdKMM22wIsv8oqthBmuvuFtqjJW2MAdENNwgPSn2YP6Te/W34YsPzvsOoDhZUUKaB2qnzY73C+8VkRyDYpu18L3r8aq6DcTDIlGMXtNIyKbHj1xczaPm/clYOrR1aCW0CbHgR9DKVGXT6mG3RHkwrDzo3QcAti6Wr1yRYtJIt1OwOuxnXfxNqXwsNqH1/MxBjDCgUd3obvQ+dg68KxNpVHPx5BZMb+vtodeUlfjZM4H9TRzOFZchDkpN6jo3xT2toVMPK1YNdaEEB0a4OX0+Eet95qRRaL7CjQzC7Sj0DFT53Iy8oh4ykr+eRnYhsvTnfThMYxfZ91hMh8vn07zewQE5GeroCRTiearU4MfTG02c7oLhCSrW+1taKB0AU8d5q3naDjOQBdUQlyAPVfH2VsEDK4/t1pIeezLPOLDwAQ0iQpyplpICn1HrOyUdlXFzl7zL/AooepJfZZADBZXUdZ8oSmaxkVTkjFJ1DXX35L6UEKcxRYFrnhobuG71larflfFl/OMkj7TOhYLs7pjBnpv9XDXgZDTSf5apwvUOqKTNUaRvFxq8KXeGRJX/eKGWvj2mxGetjeqCCbhXatCo/tc6axhRQmer/kFIE92oYMJ+Kc3ODMirW07Msyo3bW4nAhh4AOKUZdjh+sqyJpmhjc+SnArv5vn1hUBu8PUZBOcVuexmGyWcq6Cz+nU4wEFz+Sk9G1WmZdg2ImYU6YpQzJWEqaOpP4UMiXyhapu1JOoOM/mwxCIQVeM+vtwYS0ife/p5/avJ/tSRwJt6zgG6qAZ/MdTp92nz1Nu2QOen6LMsNBL1G+xKMqxk44gCWwIzBrHqMepJnsXkgWwvKuuUNB/jSh3JVlJSm8MXb6oOw/+wzmBmLSsHqDuLxOb+Cp+i5HGcWVY39DEve+ToUvGdPUFFZVjKUv7nGV1srh3kxI1t/36VnzXzsB8jSL6hcZxl2SZUaBknZCw+x4ItSNNU0TgnSXklvTdHRGHaptztzXI6v4ou9MKDxkgRFGOBfBOwoSQLjoez9DnKPpdmoHAF2kuV1igdYA2SJMDvTvP1t0uU2IM4FDgFkeNVDfI7GmTu+XRmhxaX9KvMXeh5Ge4ux+Hhha8zAxsi9FNP7O4nx8SXk8Tfoy04wQ7S151BJihqwZtH6VvfgvaFgBFHm/gLFVhwT6vy+mAeQyafeK3cb+TpynwPApb+hYG5MI8qAvNy9zEAWoSwAAA=";
const LOCK_IMAGE = "data:image/webp;base64,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";
const hint = document.getElementById("hint");
const reflectionSequence = document.getElementById("reflectionSequence");
const revealLines = [
  document.getElementById("reveal1"),
  document.getElementById("reveal2"),
  document.getElementById("reveal3"),
  document.getElementById("reveal4")
];
const innerAnswerWrap = document.getElementById("innerAnswerWrap");
const innerAnswer = document.getElementById("innerAnswer");
const releaseButton = document.getElementById("releaseButton");
const sealedMessage = document.getElementById("sealedMessage");

let ritualTimers = [];

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

let busy = false;

function normalizeText(value){
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function detectTheme(text){
  const normalized = normalizeText(text);
  for (const theme of ["heartbreak","anxiety","lonely","burnout","selfdoubt","worthless"]) {
    if (keywords[theme].some(keyword => normalized.includes(normalizeText(keyword)))) {
      return theme;
    }
  }
  return "general";
}

function chooseLine(lines){
  return lines[Math.floor(Math.random() * lines.length)];
}

function makeSparks(){
  sparkLayer.innerHTML = "";
  const rect = sparkLayer.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height * 0.42;

  for(let i = 0; i < 26; i++){
    const s = document.createElement("span");
    s.className = "spark";
    const angle = Math.random() * Math.PI * 2;
    const dist = 45 + Math.random() * 120;
    s.style.left = (cx + (Math.random() * 26 - 13)) + "px";
    s.style.top = (cy + (Math.random() * 18 - 9)) + "px";
    s.style.setProperty("--dx", Math.cos(angle) * dist + "px");
    s.style.setProperty("--dy", Math.sin(angle) * dist + "px");
    s.style.animationDelay = (Math.random() * 0.22) + "s";
    sparkLayer.appendChild(s);
  }
}

function clearRitualTimers(){
  ritualTimers.forEach(clearTimeout);
  ritualTimers = [];
}

function resetRitual(){
  clearRitualTimers();
  orb.classList.remove("wild-glow","box-mode","seal-glitter");
  orbArt.src = ORB_IMAGE;
  orbArt.alt = "Magische Kugel";
  orbArt.classList.remove("frame-swap");
  secretNote.classList.remove("fly-in");
  secretNote.textContent = "";
  sealCaption.textContent = "";
  thoughtWrap.classList.remove("hidden");
  reflectionSequence.classList.add("hidden");
  revealLines.forEach(line => line.classList.remove("visible"));
  innerAnswerWrap.classList.remove("visible");
  innerAnswer.value = "";
  releaseButton.disabled = false;
  sealedMessage.classList.add("hidden");
  sealedMessage.classList.remove("visible");
  hint.classList.remove("hidden");
}

function startHiddenReflection(){
  clearRitualTimers();

  // Nothing happens for several seconds after the answer.
  // Then the orb suddenly becomes much brighter before revealing anything else.
  ritualTimers.push(setTimeout(() => {
    orb.classList.add("wild-glow");
    makeSparks();
  }, 4500));

  ritualTimers.push(setTimeout(makeSparks, 5150));
  ritualTimers.push(setTimeout(makeSparks, 5800));

  ritualTimers.push(setTimeout(() => {
    orb.classList.remove("wild-glow");
    reflectionSequence.classList.remove("hidden");
    hint.classList.add("hidden");
  }, 6800));

  const revealAt = [7300, 9700, 12100, 14500];
  revealAt.forEach((delay, index) => {
    ritualTimers.push(setTimeout(() => {
      revealLines[index].classList.add("visible");
    }, delay));
  });

  ritualTimers.push(setTimeout(() => {
    innerAnswerWrap.classList.add("visible");
  }, 17100));
}

async function cast(){
  if (busy || orb.classList.contains("box-mode")) return;

  const text = thought.value.trim();
  if (!text) {
    thought.focus();
    return;
  }

  busy = true;
  resetRitual();
  answer.textContent = "";
  orb.classList.remove("has-answer");
  orb.classList.add("casting");
  makeSparks();

  await new Promise(resolve => setTimeout(resolve, 1700));

  orb.classList.remove("casting");

  const theme = detectTheme(text);
  answer.textContent = chooseLine(responses[theme]);

  orb.classList.add("has-answer");
  busy = false;
  startHiddenReflection();
}

async function wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function swapFrame(src, caption, alt){
  sealCaption.textContent = caption || "";
  orbArt.classList.remove("frame-swap");
  void orbArt.offsetWidth;
  orbArt.classList.add("frame-swap");
  orbArt.src = src;
  orbArt.alt = alt || "";
  await wait(700);
  orbArt.classList.remove("frame-swap");
}

async function playSealingRitual(secretText){
  busy = true;
  reflectionSequence.classList.add("hidden");
  sealedMessage.classList.add("hidden");
  sealedMessage.classList.remove("visible");
  thoughtWrap.classList.add("hidden");
  hint.classList.add("hidden");
  orb.classList.remove("has-answer");
  orb.classList.add("box-mode");

  await swapFrame(BOX_OPEN, "Die Box öffnet sich …", "Geöffnete magische Box");
  makeSparks();
  await wait(1400);

  await swapFrame(BOX_MESSAGE, "Deine Nachricht wird hineingelegt …", "Magische Box mit Nachricht");
  secretNote.textContent = secretText;
  secretNote.classList.remove("fly-in");
  void secretNote.offsetWidth;
  secretNote.classList.add("fly-in");
  await wait(2000);
  secretNote.classList.remove("fly-in");
  secretNote.textContent = "";
  await wait(500);

  await swapFrame(LOCK_IMAGE, "Das Schloss schließt sich …", "Magisches Schloss");
  orb.classList.add("seal-glitter");
  makeSparks();
  ritualTimers.push(setTimeout(makeSparks, 350));
  ritualTimers.push(setTimeout(makeSparks, 750));
  ritualTimers.push(setTimeout(makeSparks, 1100));
  await wait(2200);

  orb.classList.remove("seal-glitter");
  sealCaption.textContent = "";
  sealedMessage.classList.remove("hidden");
  requestAnimationFrame(() => sealedMessage.classList.add("visible"));
  innerAnswer.value = "";
  busy = false;
}

releaseButton.addEventListener("click", async () => {
  const secretText = innerAnswer.value.trim();
  if (!secretText) {
    innerAnswer.focus();
    return;
  }

  releaseButton.disabled = true;
  innerAnswerWrap.classList.remove("visible");
  await wait(650);
  await playSealingRitual(secretText);
});

orb.addEventListener("click", cast);

thought.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    cast();
  }
});
