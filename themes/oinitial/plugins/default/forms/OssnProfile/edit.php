<?php
/**
 * Open Source Social Network
 *
 * @package   (Informatikon.com).ossn
 * @author    OSSN Core Team <info@opensource-socialnetwork.org>
 * @copyright 2014 iNFORMATIKON TECHNOLOGIES
 * @license   General Public Licence http://www.opensource-socialnetwork.org/licence
 * @link      http://www.opensource-socialnetwork.org/licence
 */
$user = $params['user'];
?>
<label> <?php echo ossn_print('first:name'); ?> </label>
<input type='text' name="firstname" value="<?php echo $user->first_name; ?>"/>

<label> <?php echo ossn_print('last:name'); ?> </label>
<input type='text' name="lastname" value="<?php echo $user->last_name; ?>"/>

<label> <?php echo ossn_print('username'); ?>  </label>
<input type='text' name="username" value="<?php echo $user->username; ?>" style="background:#E8E9EA;"
       readonly="readonly"/>

<label> <?php echo ossn_print('email'); ?> </label>
<input type='text' name="email" value="<?php echo $user->email; ?>"/>

<label> <?php echo ossn_print('password'); ?>  </label>
<input type='password' name="password" value=""/>
<?php
//Oinitial only: members can't change/save profile settings #693
$fields = ossn_prepare_user_fields($user);
if($fields){
			$vars	= array();
			$vars['items'] = $fields;
			$vars['label'] = true;
			echo ossn_plugin_view('user/fields/item', $vars);
}
?>
<label><?php echo ossn_print('language');?></label>
<?php
	//profile edit form shows wrong default language #546
	$userlanguage = ossn_site_settings('language');
	echo ossn_plugin_view('input/dropdown', array(
				'name' => 'language',
				'value' => $userlanguage,
				'options' => ossn_get_installed_translations(false),
	));
?>
<input type="hidden" value="<?php echo $user->username; ?>" name="username"/>
<input type="submit" class="ossn-button ossn-button-submit" value="<?php echo ossn_print('save'); ?>"/>
