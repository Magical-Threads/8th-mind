<?php 
$this->load->view('admin/include/header.php');
?>
<!-- BEGIN PAGE LEVEL STYLES -->
<link rel="stylesheet" type="text/css" href="<?=base_url()?>assets/global/plugins/select2/select2.css"/>
<link rel="stylesheet" type="text/css" href="<?=base_url()?>assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css"/>
<!-- END PAGE LEVEL STYLES -->
<style type="text/css">
th{
    white-space: nowrap;
    width: 20%;
    text-align: right;
    border-right: solid 1px;
}

</style>
<?php 
$this->load->view('admin/include/top_menu.php');
?>
<!-- BEGIN CONTAINER -->
<div class="page-container">
<?php 
$this->load->view('admin/include/sidebar.php');
?>
	<!-- BEGIN CONTENT -->
	<div class="page-content-wrapper">
		<div class="page-content">
		
			<!-- BEGIN PAGE HEADER-->
			<h3 class="page-title">
			View Artist Detail
			</h3>
			<div class="page-bar">
				<ul class="page-breadcrumb">
					<li>
						<i class="fa fa-home"></i>
					    <a href="<?=base_url()?>admin">Home</a>
						<i class="fa fa-angle-right"></i>
					</li>
					<li>
						<a href="<?=base_url()?>admin/artist">artist</a>
                        <i class="fa fa-angle-right"></i>
						
					</li>
                    	<li>
						<a href=""><?php echo $user->firstName; ?> Profile</a>
                 
						
					</li>
				
				</ul>
				
			</div>
			<!-- END PAGE HEADER-->
			<!-- BEGIN PAGE CONTENT-->
			<div class="row">
				<div class="col-lg-offset-2 col-md-8">
                       <?php $this->load->view('include/alert'); ?>
		<!-- BEGIN SAMPLE TABLE PORTLET-->
					<div class="portlet box purple">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-comments"></i> <?php echo $user->firstName; ?> Profile
							</div>
							<div class="tools">
								<a href="javascript:;" class="collapse">
								</a>
							
							</div>
						</div>
						<div class="portlet-body">
							<div class="table-scrollable">
								<table class="table table-striped table-hover">
							
								<tbody>
								<tr>
									<th>
										 First Name 
									</th>
									<td>
										<?php echo $user->firstName; ?>
									</td>									
								</tr>
								<tr>
									<th>
										 Last Name 
									</th>
									<td>
										<?php echo $user->lastName; ?>
									</td>									
								</tr>
                                <tr>
									<th>
										 Email
									</th>
									<td>
										<?php echo $user->emailID; ?>
									</td>									
								</tr>
                                
                                <tr>
									<th>
										Gender 
									</th>
									<td>
										<?php echo $user->gender; ?>
									</td>									
								</tr>
                                <tr>
									<th>
										 Date Of Birth 
									</th>
									<td>
										<?php echo $user->dateOfBirth; ?>
									</td>									
								</tr>                             
                              
                              	<tr>
									<th>
										Status
									</th>
									<td>
										<?php echo $user->userStatus; ?>
									</td>									
								</tr>
                                	<tr>
									<th>
									Email Status
									</th>
									<td>
										<?php echo $user->emailStatus; ?>
									</td>									
								</tr>
                              	<tr>
									<th>
										 Created At 
									</th>
									<td>
									
                                         <?=date('F d,Y g:i A',strtotime($user->createdAt))?>
									</td>									
								</tr>
                                <tr>
									<th>
										 Updated At 
									</th>
									<td>
									
                                         <?=date('F d,Y g:i A',strtotime($user->updatedAt))?>
									</td>									
								</tr>
                              	<tr>
									<th>
										 last Login 
									</th>
									<td>
									 <?php if($user->lastLogin=='0000-00-00 00:00:00')
                                                                {
                                                                   echo "Never Logged In"; 
                                                                }
                                                                else
                                                                {
                                                                   echo date('F d,Y g:i A',strtotime($user->lastLogin));
                                                                }
                                    ?>
									</td>									
								</tr>
                                <tr>
                                <td colspan="2" style="text-align: right;">
                                <a href="<?php echo base_url();?>admin/artist/edit/<?php echo $user->userID; ?>"><button type="button" class="btn green">Edit Profile</button></a>
                                </td>
                                </tr>
                                  
								</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		
		</div>
	</div>
	<!-- END CONTENT -->

</div>
<!-- END CONTAINER -->
<?php 
$this->load->view('admin/include/footer.php');
?>
<!-- BEGIN PAGE LEVEL PLUGINS -->
<script type="text/javascript" src="<?=base_url()?>assets/global/plugins/select2/select2.min.js"></script>
<script type="text/javascript" src="<?=base_url()?>assets/global/plugins/datatables/media/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="<?=base_url()?>assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js"></script>
<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script src="<?=base_url()?>assets/admin/pages/scripts/table-managed.js"></script>
<script>
jQuery(document).ready(function() {       
    TableManaged.init();
});
</script>

</body>
<!-- END BODY -->
</html>