import React from 'react';

import { Box, Text, Title, ScrollView } from "..";
import { Story } from './Story';
import { HeaderStories } from './styles';

const array = [
	{
		banner: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQDxIQFQ8VFQ8QEBUPFQ8VFRAQFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAL0BCwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EAD8QAAICAQMBBQUFBgQFBQAAAAECAAMRBBIhMQUGE0FRImFxgZEHFDKxwSMzQqHR8FJigpIVcqKy8SRDc4PD/8QAGwEAAgMBAQEAAAAAAAAAAAAAAgMAAQQFBgf/xAA1EQACAgEDAgELAgYDAQAAAAAAAQIRAxIhMQRRQQUGEyJhcYGRobHRFPAyM3KyweFCUqIj/9oADAMBAAIRAxEAPwDxJWhkeKyaGGmC0MEwVsnmDskKQGTSaxHNLTBCZlNJMsKdIfSNaPTS3r04AlNgorKaMRtGxDWKBFLrAJErJYz94Ai9+pETa6AsthKJRmpviYM3YZpYdFEwZEyYEkqEnABJPAA85dEA7YVFnZdlfZlrrVDt4VSnGfFY7gOOQoHPBPu46y7s+ySzaTXq6mcdAyMoJ9NwJ9/lAeSK8S9LPNdsg6To+3O6Or0mTfV+zHPiVnfWR5+0OnXzxKC2GnZBUiTEjJLIUbIkGEJBvIQgBCCQEmJCElkjIGQLyiDKTVggUuhN0ohDE3JYmYxIWREhJtBSyFbJKZoiTRcxaGE1hUpzDabS5ltRopdgFbp9Fky10+jAh002IZOIJdh9PSBD2NiLjUAQV2qkoEDq7pUai4w+rvlfnJjEigimbJmhN4hEBtMQSTCbQSyDGl0zWOtaDLuyoo9WY4A+pnsndXutX2fWbX22alsEEqD4QwDtA55Bz7U4D7OqR968U9Ka7Lc8YDcKP+4z0VNST7TH2mz64Ey9Rl07DsONzLC/tNmIBIIIKkLkkH346dJi645OA3O51DZ6EnAz7znzGMdOsrwBjB3HOc8xO/I6FvzH0PymL0sTZ+mmzoaO0gQUcZTLBg+CCCMgZPH5zz/v/wBza0rOs0YIXdutQFAlaEZyo4xjjjJ6zqezLOMYGTuAwAM+uZOjVKKXRtrIyWDYwBGSMY2tkdf554jseSnsZ8uJrk8KYTYEkR/YklE6JlImDYQ5WQdZRAKLDBZpVhgJGUBZYFxG2WL2CUQgghhBqJNZTLJLJNIGa8SQhMCQmeJISEExUTHNNpTG6tNHakiwrM0unltVVgRWmFe2SimzdhEVeyRutlfZZzCSKsba6AsugyeIFmhUWQtbMEBJNN1iEUbUQmJNVm2WQgvJKJphJJIUXXdnVmu4AE7XBVx6gcj6Ynpent8xz0490867qWL4jIwGGXJY49jb58/H+8Ttb+1xpxxXvIxuyyqPlkzndU7yJew6XSxrHqfj/j92XfJ9P+oxXWbtpPH0MqezO/VF58MB0s5G18HkehHBiPb/AH6rrbwq03Pn2t52onxMy+jk5afE1+kVavAudBqyjYPTDfz4iHbmp9hyhwArMc8cYJivZXeFXcBhU2eP2bEMOcZwRyMy07UpUKHIYpj2goJyPLIHlnEKDcOfAXkisnHieV21MuA6spwCAwIJB6Hny982su++lQDo4LEOHI3dQvskL8AWYTng062OeuKl3OVnxeiyOHNfgYm9kEjQ5MJsWkRCiYwkd0kxlFkGaLWGEaCslkIq0KrRXMKsFhJBWME0nBOJEy2jSw+IGuNqJUp0Mhh1IuPCxBucQ174lZqNVKSEDXjyD3ytGom2sh0UNPdmAzAmya8aWiDDNISCGTJlkItCViCYwlTSiDCibImlMx2kIAebWaabQyyuS97o7PvIWzGx1sQ56HIyB/KehP2Np9Qgd1RrBkDcNwIwQeJ5IDPSO4naGalUnJXIOeuMmYurhTU/gb+kybejfv8AsWXYvdimpkt8KtWQ7a8Lg45yTyc9T1gtX2HXY7NtTxCSckKcqRgr0lj2r2q1BFjIGTBz7Sgr18j1lR2f3ge+wEVolXtNudwHGfIIPL5zHu1Z0ElwOabs2upRuUZA2qNq4UDyGPiYLW68IQQdqnaCfTJAh9bdkE7hgeeRicd3p1gs07bem5F+Qbr/ACkhHXKu4vLJQV9typ7+a+uy9VpOURME5z7ZJJGfgF+pnOI0jYJBTOrCOmKivA5OSbnJyfiMBoZbYqJuEAMFpvfE2Jk68ymFFWFMG4hds0UlWFQpiHrEw1wtSQZTSHY8LkaIgXEd8KDsrgLIhz6SVCtYjqrAIkaURc5bmvBhajTHNc2Myius5lt2gZSP1mqJxAiNCCCqh5bIDeQBhXgJaIMKZKRqhJGQG81W028gnWWiDaGTxIpJ5gkoDYJqsybyFcKyg4j/AGX2nZQwav3qfgen84mo9Jb6ru+6Npc2Ls1NJ1AZRnkMVNQJ6sMLn4n05VlScHfA3DamqLXQNbahtutqWsn8VgNhGPUZAHn1gbakbIq1NDucgClD7I+TD1lb2J2xVp91N9e4AkMrZ8jyMRjW95tIqt93orVzkZVQDOfpfFHWjljp3oRt7RtpS2hrN+cAFc8+vWPafRvZormAZm9h1AySURgTgfAsflOf7P03jPz0J5P6T1Lu7SKxgdABiE5KDXcRpc4vseY3dkW+AmqC5od3qDAjK2qMsjL1DYOfePnKs1n0M9N7S50faYxhVt7MsX3Ws7IxHvKzgQfSdPFFZIKXF/g52RaJOPYVVZILGc/D6CFDD/CPlCeF+AFoTFUKlMf0yKxA6E9M/wBY6NBFTTjyHF2VIrmzVLkaGY2iixllIKZIVyzbSxd68TNkZ2+igmtwAWDdIxiZti42bc2mKEwkOFhvCmbIekx/qEuDNfVnMor6SDOl1C5iFunzNyPO2U9Yh8Ro6Wb8GQgoVgSssDVNeBImQWqEmEjKUyYrkbLQo1cGEjrrBbIGoZoMrWFCTdSxpK4Yp7CjJN1aXzbgeQ8z/SNgenWCtzNEMP8A2BbIWHHAGB0+PxMuuxu0q3rGh1b+HWHNuj1HX7nqDwd486X/AIvQ8+8VBX6cYmPQGBHwYR0oJxoibTsue2ex1dympTw9YBltp9m9fKypujoR5jp5zl9R2QQ4VQSPfPSe73Z6W9mFnzcmntC2029aq25S3T2j2qiMgEcr7J4EHpe7iOwOkv8AG8/u+o8OrVD1Ck/s7/kQZyJ45Qk4wfHh+O51IrViWWcfVutS4vs+z3+Pgc12DSEIXHnj5ztRqEqrZ3YBUVmPux+ueINtBUrN4h8MqNzrcpqevHmVYA468jiEtCUqmp1K4rDGzRaZ+LdfcDlLLF6pQpwckc4HuByQwynP1rXfwHzyJRWndvhc2+NqIXdjWW6c6Ddt1liP2rq1PUELjTaX44O4+m33zzWpfZH99Z6D3V7Qddel9r7rLLM3uejGw7Tx5AA4A8go9Jz3e7sn7rrL6APZVy1f/wAb+2n0DAfKdbpMynqS4XHuM/lTyfPpJY9btzjb9jtpr4bb+LvwooVrkdvMNn++IC5/P0P6zYcsPpzyCPX+ecTpdHYLFz59G+M5ShsEj/MT9ZcdjajDH0z7uh4P6RWSGqNBwlpkm+C6FchYsmzyDvOWpWdmXTUrFbBEdQsdsaI6ho1YrLjm0IVYwe6atMBuhrDRk6rrHLZDivN7oBWm90mhHNeWdlgVzNHTzNLZ6x4CXYWliH3WROllsEm/DEll6GU33SbGklt4c2a5LJokUzafECyS3sWV2o4lN7Bxg0xJxIqJu2yLrbzJFWOlsO0pGXAHEhpTIWvkzThjvZklybRpjEdfnBP6DrIO/BHummyhpR1+RExSOPWLV2fn+Yhyv9/+ZLId39k2o/8AVW6Nvwami2sg/wCJRuXH+kvKXWVlLGrYLwzbgc8MGwf5iKd1tf8Ad9bpricBbU3f8jHa5/2sZ1P2gaHw9fbxw5Fy+8v7TfzzOT5SjUozR63zVzevlwPdSV/J7/O/jQro+3igHjL49lfOkGrdrKtNZ5uEJyx6YySBjiVupveyxrrnay5vx2P1I8go6Ko8gOBASXpOfLPklHS3senxeTOkxZfTY8aUvovcuE/akvqze3kMODkYx6y/+1LT+INJr1GRdSK7On71OcH3+0w/0SiE6VbU1HZN2lYgaihl1GnViNzjneiDqx/HwP8AGJo6HJoy13OV5zdN6TpVlXON/R0vvR5q6xe9evvENc+CQRz0II6H3iB3huOhx045E7h4EXV8YPw/pH9BZ+v5yqtPA+OJZdmJuZUBGWYKM56kgfnKLovrbyQrDoRhunUf2JD7wZav2T4dD+Iw/EBVtOd7AZJP+jOAOgyTnyoHaYMmDTktbp7/AJO5h6q+nUZqpQ2fw4/HwJ2XRexppmg2M3wxpLc4mbO3LYDaYuxhrTFrDF5GBEkLZvxouWkN0TQVF5pXlgtkpKLcRldVMkpHVxYLRdLdJiyUq6uFXVwdY39KWwaYzytXVzG1cimE+mpDF1kp9ZbD3aiIXNmOimzJkioi7tAbuYVpi1Ry2MsnZYaElvZUEnDNx/hUFmPyAJ+UmZZdwtPv1W3bn9naD7lYBHP+12lXnp8BH4HdicipozMVWzLEeuYwTK5W9sf80a2ChrSnOfl+eJYbh/eJV6I4J/vzMfLyymZfz856n30s+8abQ67HNlCo5/zKMsPqzfSee9ndj3aiuyyit7PCNIZalZ2JsJAwq84G05+U9G0mitr7KGn1lbA0O1xWtkNipZnar9RXk2Hrk4/hPlj62Klia8UdTyNn9B1mOe9N1ty72+7XxOIb9JtZLUWqxJVQB0GAScfP8/y6QYM4TPpkJOUU5KvZd/ba+9Wr8XyGpTJwOueM+uOJddhdqIxWlKWAJ1Qds5JFIKmxhjnd4la7ccEdeBKBT9OhjFWrasWikA+MxZk4Ui043FG/hDHBIJPkMcAzX0ko+srpvg835x4cs/QzScscb1Jd9qfytav+O/enV96da1rhba1R1WxfUiyv22IfA3Vsjgjy6Y888ve20qR1zOg7x6hg2y0OLkXYFcMDWjAElgerMD1892eOh5vVnOD8/nOxG6PDur2/fyM1R9kH3gxrT3FWVk6qQw8xkc/SJWPlcfD84eowuWyk2qa5R1Tdqi0goCuF2jcckDOSB6D9AJW32YJEU0FuGz/eJvtSzDn34YfAiDkVafYGpyblfL9lcexbfIkbZhsiAthBZC1mfTuEsaAcyTNBMYmTsYlQNjNTMQ/hxbdBpDGIPMMYszTK1Z2IZNIZWkw0DWYaKlsbsT1BQ8wvBFpAtCxqydROokneCdpomSadGEVR53LkbkRrXMa8OApjJaLyF4ty97pW+F951AODXp7AOnV+F+rbF/1Tn62zz9IX7wwrapeFsKF/UhMkDPpls49VHpIHjiaOnVR94vO/XIWGVjNh/gwj7t6Srtb2vmIc3QuKLLSjn+/WTd8tjriB07TenPJMMFF52X3h1Wk3/dbmq8QKH2hDnGcfiBweTyOeZ2H2X6lrk7Qodiz2UeOC5LMzruBYk8k5ZJ5ze3Mve4/eEaG9tQyGxTVZUUUhc7tp6n3qIucVKLXcZCTg1JeG4wvn8TNqZX19qMzAV1DJb2QfaJJOFA6c9BHO8mh1WjvOnuwrYV1NYADqw6qwGeuR8QZxo9BldJ0vj+D32Xzl6KO8NU/dGv7tIZAfIH6GB+9Kjhi6DDKxOTng56R77N9FRqtetGtXxK3S3arM4HiKAw6EZ9lX4nU9n9k1aTvEaErrFFlRNKFQVXNQfgHod1b8++M/QJWpS8L2X5/BzsnnU3/LxfN/4SX3OG7+9q0arXPdpm3VulQ3bXXLqu08MAfIczkbOhHmDOo+0bSintPVKowPF8Qf/Yq2H+bmczqPxZ8mnUXCPIpUKsePpGaTA1oGYISQCwBIG4jJ8h5/Cei9m91tIiC25dQy+Z1dlWko+P8AjPwBgOai9xkcbnx9Wl9XSOY7D7Ju1Fi1adC9h5OOiL5s7dFX3mW32g92RpKtPajm0NvptsGBWbh7W2rPLKBuG7pkfKXuq76aTTJ4OnVLT1FWkVqNLn1tc/tL/wAj6zjO83bN2uC3XtlkPhqqDbXUhyQK0HCjjHyGYEpSn4Ul82FWOC51SfbhfOm+3FLlOWzVBU8ZVosq4hhBsUybNITbGRzLIEqHMc2xGs8x1XgSQSBNbxFi0iWkS0igOeVjVTRgGV9VkbraZMsaOx0c7QVoIwuJErAhKmas2PUgJEwwu2RIm2OVHHydHW5APiGWyLuJiGNasxfwMsW0tgRbmrcVNkJYVYVsQSCA/QnIIg246z0Duj31pp0yae1dTWoBXehrvqszkkvp34xzztOY3qtF2Vq/3a9nlzyPudraO7nz8C32CflCWVwSUov3rcjwxnvGavs/Vfzfq/8Ar4I8qus94lZY3ORPR+1e4aD92+tQel+mWwH4W1HB+k4jtPQColMkspwxZSh5/wAp5Hl19YGTNFqkEunmrbXBBbMCF0fMrw3lLLScYmmLtmZqjephaPwwd/WbrPEIof7IZ0caitC3gNVeeCQoR1ILkdF3YGffPce9HZNPbXZ6anS48cA2UE4yH/8Acoc+WSMfEA9JzP2EdmKy6q9gGB2abaQCNpG98jzByg+RjGj1uk7I1x0JYvVbY9lhc/s9D4nFKKvQkLjc55wR6HOfJJuVR5X7YSVLfxPPu6OsOn7Q0zsCCt9dbg8FdzeG4I8iAxnov2ok6btPs7WjzK1uf8tdo3f9NrSv+2Luoa2/4lphwxX7wF/gs/gu+BOAffg+Zlr9renbV9m6fV0KzgNXcTWC22q2s5bjyDbM+kjkpSjLvaLrlHIfbVodvaG8Di2mp/iy7qz/ACRZ50wyCPMcj4T1L7T9dTrNPo9VTdS1grZLqxZX4qlgh5rzu4YMDx5+k8zce0MfiPGPNvgPOHj/AIVZT5F9HWGtQHoSM/SBvRhYVckkEjLcnA6Sy7LoI1CbgRwzruBG5SpwRny9/ugu8NJW3eOjjPzAwf0iJyrIhqj6liaKT06n18hHuztPyRuHIxj39RK8V+bECWnY9le7aRu9MFQQfUZPMcknsxTfiiN+mxAlZb65R/5x+kqiJniHJb7ACk1sjLQRMrVuGoEBD7otmZvhrcW+QZMgxk2WDZZNaoY8Ul4E6Y9VFKFj9KzHlludnooNJBVEliFVZrbMx2FGtgZWBZYwRIlYcJULzYtSFHEgIyyQRT+z5ToY8lI891HTS1DatjC45A59AZX6q9cnIz8Izq9SccBip82wmfrElcDnYceoIM1N+CZzEiVOtsT91ZdX7q2dQfoYS07gdxJJ5JPJJ9SfOKeKSw4h1MS1qH45ab9ovSoBwxwY4XHGCDyOhieqXkH5QujrHXzjMcnxQqaXI3Z1kl6Tsuze5maqtVb7db02WireKi9xz4FZsP4VcDOeOQBnLCM11aKlV8SrRLssFurod31F5GamSmiweyRjerAnAO4NngwvSLhbg1sKdxu9D6Gq/wC6iy7UWhRsCk1afYW/atjJd8HoMADqT0FKNNqNTYjkM9mptdEdyB412V3DcTjOXX/cJ2mg75LTk0rZrbFBd7q6G04VRdW9NbhOdqqt3J4Bsxhhmc9oe1mrXYulNmzUtrNK99hRqXITG5V2h/3ak9Bnyi3kUbbpX3dfeh0Ony5f5cJS/pTf2R0Wg/4tdSmks1Vdelataq9y12G+pqbLcKduWwlTKcsMEATntH2UzpsW7U2U162vS3JTu2rp23Fr9oLBfwP6gepgl7S1g2bLkrWu3UailVAYVPfkWBQQfZwW4OfxH1i9xtdnezU3lrNvi7DsFgUYUMFOCAOIh9VjjfrL4L/VfU6GPyJ12Rr/AOdLu2l9Lv6HWN2L2bozZ4lldtyihxVqcEIoANqgZAsLFWA446fFde8mjoDNXYAxeosumoYA+EbEJGGrQBlNbjB4xxhsEU/dfQaf71ULKkas2orCwllIJAbI/CeDn5Sg7yaXwtRdTjAS65APRVchf5Yl4ckM103t3E9b0GXopRjkq5K9rf3S3+AftrtivUauu2pLFUVrUfFYMzEb8EkdeCoz1O3J5JlZ3gsyU+DfpFAfaX/mH5xnXqWXPmOefTzhzhTVGJTrYQpA9PrkxvSorH2v1I/2iK1DnmO6duf6RsUDJlnqlCgBc4wDjkY9fIekryI9qjkL18xz/T5xOxcQHH1mUpcAXME02zQLvA0GjXsYWkcwZmQ6FMsWpgzTLOysQG2czW0eofTRkArqjlSTSLDgQJOx+HGoGCSxIySwEamjRSQKRkCRaXwRbiuyTFXuB9x/P5dflCqIdB+UdhfrL3r7mTq8a9HP3P7Fdq0+vmZVW0fP5CWhYsM5wOeB/WI3KfU/ynYmkzxsWB01RwSeB85snELorMgjA6+WYHUTOpb0NaIXnIhdGePfFjC6Xg/GNg9wXwWRr3csc8Ac5PsjoOfIekkVwMDpIAwjfhjwDtfsjfc+t0+f3ulYge9CV/8A1lM/U/Exz7IrSvaaAdGS9D8Nm/8ANBB9p1hbbEHRXcD5Eicbyklqi/eew81sm2aH9L/uT/wKmRmTCZzT1ZKpyGUg4IZSD6ETPtHrxrrWH4blo1Ke8WVqSfqGg5Y/aTWNnZ9v8TaUo3vFTez/AN5nQ8nP15LujyvnNC8eKXZtfNf6ODsbBB9CDLK05HxH5ystlgh9kfATpTPHT4TK+uN0n4xX+I/GHVcc/pDQTLbqgPnk8cdPWL2iMJnwxkjGc4AAxxFLjKk9xYldFzGXEXaU2GiLSGZsyMqw0j//2Q==" ,
		picture_profile: "https://i.pinimg.com/736x/5d/73/a4/5d73a4c9f2df89ba5dd36daa7ceac550.jpg" ,
		user: "@neymarjr" ,
		time: "2min ago" ,
	},
	{
		banner: "data:image/jpeg;base64,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" ,
		picture_profile: "https://i.pinimg.com/736x/5d/73/a4/5d73a4c9f2df89ba5dd36daa7ceac550.jpg" ,
		user: "@neymarjr" ,
		time: "2min ago" ,
	},
	{
		banner: "data:image/jpeg;base64,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" ,
		picture_profile: "https://i.pinimg.com/736x/5d/73/a4/5d73a4c9f2df89ba5dd36daa7ceac550.jpg" ,
		user: "@neymarjr" ,
		time: "2min ago" ,
	},
]

export function Stories() {
	return (
		<Box height="300px">
			<HeaderStories>
				<Title variant="small" color="dark">Stories</Title>
				<Text color="danger">Show All</Text>
			</HeaderStories>
			<ScrollView horizontal height="200px" style={{ paddingLeft: 20, marginTop: 5 }}>
				{array?.map( (item, index) => (
					<Story data={item} key={index} />
				))}
			</ScrollView>
		</Box>
	)
}