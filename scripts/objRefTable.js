const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.Bullet,
		C3.Behaviors.Anchor,
		C3.Behaviors.Sin,
		C3.Plugins.Mouse,
		C3.Behaviors.Physics,
		C3.Plugins.Keyboard,
		C3.Plugins.Audio,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.System.Cnds.OnLayoutStart
	];
};
self.C3_JsPropNameTable = [
	{фонНеНужный: 0},
	{hard: 0},
	{инстр: 0},
	{Текст: 0},
	{фонДляИгры: 0},
	{Твёрдый: 0},
	{платформаНевид: 0},
	{Платформер: 0},
	{СледитьЗа: 0},
	{перс: 0},
	{шипи: 0},
	{Пуля: 0},
	{стрела: 0},
	{Якорь: 0},
	{хп: 0},
	{Синусоида: 0},
	{летучяМыш: 0},
	{летучаяПлотформа: 0},
	{Мышь: 0},
	{невидимая: 0},
	{кабан: 0},
	{полныйДуб: 0},
	{водичка: 0},
	{таран: 0},
	{туча: 0},
	{аааааааааа: 0},
	{ааааааааааааааа: 0},
	{Физика: 0},
	{огонь1: 0},
	{Текст2: 0},
	{платформаДоска: 0},
	{Клавиатура: 0},
	{дуббезЛиствы: 0},
	{листва: 0},
	{Текст3: 0},
	{дом1: 0},
	{домНаДереве: 0},
	{дом2: 0},
	{вулфыч: 0},
	{огонь2: 0},
	{харчок: 0},
	{Текст4: 0},
	{Текст5: 0},
	{просто: 0},
	{Спрайт: 0},
	{Спрайт2: 0},
	{Спрайт3: 0},
	{Текст7: 0},
	{Текст8: 0},
	{Спрайт4: 0},
	{Спрайт5: 0},
	{easy: 0},
	{домой: 0},
	{Аудио: 0},
	{Спрайт6: 0}
];

self.InstanceType = {
	фонНеНужный: class extends self.ISpriteInstance {},
	hard: class extends self.IButtonInstance {},
	инстр: class extends self.IButtonInstance {},
	Текст: class extends self.ITextInstance {},
	фонДляИгры: class extends self.ITiledBackgroundInstance {},
	платформаНевид: class extends self.ISpriteInstance {},
	перс: class extends self.ISpriteInstance {},
	шипи: class extends self.ISpriteInstance {},
	стрела: class extends self.ISpriteInstance {},
	хп: class extends self.ITiledBackgroundInstance {},
	летучяМыш: class extends self.ISpriteInstance {},
	летучаяПлотформа: class extends self.ISpriteInstance {},
	Мышь: class extends self.IInstance {},
	невидимая: class extends self.ISpriteInstance {},
	кабан: class extends self.ISpriteInstance {},
	полныйДуб: class extends self.ISpriteInstance {},
	водичка: class extends self.ISpriteInstance {},
	таран: class extends self.ISpriteInstance {},
	туча: class extends self.ISpriteInstance {},
	аааааааааа: class extends self.ISpriteInstance {},
	ааааааааааааааа: class extends self.ISpriteInstance {},
	огонь1: class extends self.ISpriteInstance {},
	Текст2: class extends self.ITextInstance {},
	платформаДоска: class extends self.ISpriteInstance {},
	Клавиатура: class extends self.IInstance {},
	дуббезЛиствы: class extends self.ISpriteInstance {},
	листва: class extends self.ISpriteInstance {},
	Текст3: class extends self.ITextInstance {},
	дом1: class extends self.ISpriteInstance {},
	домНаДереве: class extends self.ISpriteInstance {},
	дом2: class extends self.ISpriteInstance {},
	вулфыч: class extends self.ISpriteInstance {},
	огонь2: class extends self.ISpriteInstance {},
	харчок: class extends self.ISpriteInstance {},
	Текст4: class extends self.ITextInstance {},
	Текст5: class extends self.ITextInstance {},
	просто: class extends self.ITiledBackgroundInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Текст7: class extends self.ITextInstance {},
	Текст8: class extends self.ITextInstance {},
	Спрайт4: class extends self.ISpriteInstance {},
	Спрайт5: class extends self.ISpriteInstance {},
	easy: class extends self.IButtonInstance {},
	домой: class extends self.IButtonInstance {},
	Аудио: class extends self.IInstance {},
	Спрайт6: class extends self.ISpriteInstance {}
}